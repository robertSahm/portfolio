import React from 'react'
import PropTypes from 'prop-types'
import { AlpinePageTemplate } from '../../templates/alpine-page'

const AlpinePagePreview = ({ entry, widgetFor }) => (
  <AlpinePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AlpinePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AlpinePagePreview
