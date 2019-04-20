import React from 'react'
import PropTypes from 'prop-types'
import { TCSPageTemplate } from '../../templates/tcs-page'

const TCSPagePreview = ({ entry, widgetFor }) => (
  <TCSPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TCSPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TCSPagePreview
