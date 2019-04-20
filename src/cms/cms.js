import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import TCSPagePreview from './preview-templates/TCSPagePreview'
import AetherPagePreview from './preview-templates/AetherPagePreview'
import LuceraPagePreview from './preview-templates/LuceraPagePreview'
import AlpinePagePreview from './preview-templates/AlpinePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('aetherworks', AetherPagePreview)
CMS.registerPreviewTemplate('lucera', LuceraPagePreview)
CMS.registerPreviewTemplate('alpine', AlpinePagePreview)
CMS.registerPreviewTemplate('tcs', TCSPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
