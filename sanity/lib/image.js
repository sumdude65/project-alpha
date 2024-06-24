import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source, width, height) => {
  return imageBuilder?.image(source).auto('format').width(width).height(height).fit('max').url() //for more info: https://github.com/sanity-io/image-url
}
