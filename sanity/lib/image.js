import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source, width = 1280, height = 720) => {
  return imageBuilder?.image(source).auto('format').width(width).height(height).fit('max').url() //for more info: https://github.com/sanity-io/image-url
}
