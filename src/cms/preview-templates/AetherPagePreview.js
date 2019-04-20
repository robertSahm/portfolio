import React from 'react'
import PropTypes from 'prop-types'
import { AetherPageTemplate } from '../../templates/aether-page'

const AetherPagePreview = ({ entry, widgetFor }) => (
  <AetherPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AetherPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AetherPagePreview
