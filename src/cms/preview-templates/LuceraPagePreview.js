import React from 'react'
import PropTypes from 'prop-types'
import { LuceraPageTemplate } from '../../templates/lucera-page'

const LuceraPagePreview = ({ entry, widgetFor }) => (
  <LuceraPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

LuceraPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LuceraPagePreview
