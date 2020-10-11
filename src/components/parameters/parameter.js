
import React, { useCallback } from 'react'
import { checkCall } from '@keg-hub/jsutils'
import { useTheme } from '@keg-hub/re-theme'
import { noOpObj, noOpArr } from 'SVUtils/helpers/noop'
import { removeQuotes } from 'SVUtils/helpers/removeQuotes'
import {
  Column,
  Row,
  Switch,
  Text,
  Input,
  Option,
  Select,
  renderFromType
} from '@keg-hub/keg-components'

const Wrapper = props => {
  const { styles, children } = props
  return (
    <Text className={`table-column-text`} style={styles?.text} >
      {children}
    </Text>
  )
}

const useParameterAction = (row, param, parameterAction) => {
  return useCallback(value => {
    return checkCall(parameterAction, row, param, value)
  }, [row, param, parameterAction])
}

const DynamicInput = props => {
  const {
    param,
    parameterAction,
    row,
    styles,
    value,
  } = props

  const {
    options=noOpArr,
    type=`string`,
    uuid,
  } = param

  const paramAction = useParameterAction(row, param, parameterAction)

  switch(type){
    case 'select': {
      return (
        <Select
          key={uuid}
          className={`step-param-select`}
          styles={styles?.select}
          onValueChange={paramAction}
          value={value}
        >
          {options.map(option => {
            return (
              <Option
                key={option}
                value={option}
                label={option}
              />
            )
          })}
        </Select>
      )
    }
    case 'boolean': {
      return (
        <Switch
          key={uuid}
          className={`step-param-boolean`}
          style={styles?.switch}
          onValueChange={paramAction}
          value={Boolean(value)}
        />
      )
    }
    case 'string':
    default: {
      return (
        <Input
          key={uuid}
          className={`step-param-input`}
          style={styles?.input}
          onValueChange={paramAction}
          value={removeQuotes(value)}
        />
      )
    }
  }
}

const RenderColumns = props => {
  const {
    row,
    styles=noOpObj,
    parameterStyles,
    parameterAction
  } = props

  const theme = useTheme()
  const columnSize = 12 / row.length
  const { token, params, value } = row

  const { size:size1, ...col1Styles } = (styles && styles[`column0`] || noOpObj)
  const { size:size2, ...col2Styles } = (styles && styles[`column1`] || noOpObj)

  return (
    <>
      <Column
        size={size1 || columnSize}
        className={`table-column`}
        style={theme.get(styles?.column, col1Styles)}
      >
        { renderFromType(token, props, Wrapper) }
      </Column>
      <Column
        size={size2 || columnSize}
        className={`table-column`}
        style={theme.get(styles?.column, col2Styles)}
      >
        { params && params.map(param => {
          return (
            <DynamicInput
              row={row}
              param={param}
              value={value}
              key={param.uuid}
              styles={parameterStyles}
              parameterAction={parameterAction}
            />
          )
        })}
      </Column>
    </>
  )
}

export const Parameter = props => {
  const { styles=noOpObj, ids=noOpArr } = props
  return (
    <Row
      key={ids[0]}
      className={`table-column-row`}
      style={styles.main}
    >
      <RenderColumns
        {...props}
        ids={ids}
        styles={styles}
      />
    </Row>
  )
}