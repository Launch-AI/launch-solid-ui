import { Color } from './Avatar'

export default class GetColors {
  getOutlinedColor(color: Color) {
    let backgroundColor = '#E5F5FF'
    let borderColor = '#0099FF'
    let imageColor = '0099FF'

    if (color !== undefined) {
      switch (color) {
        case 'grey':
          backgroundColor = '#F5F2F2'
          borderColor = '#EBE4E4'
          imageColor = '#0099FF'
          break

        case 'purple':
          backgroundColor = '#EFDBFF'
          borderColor = '#531DAB'
          imageColor = '#531DAB'
          break

        case 'green':
          backgroundColor = '#D9F7BE'
          borderColor = '#389E0D'
          imageColor = '#389E0D'
          break

        case 'teal':
          backgroundColor = '#B5F5EC'
          borderColor = '#08979C'
          imageColor = '#08979C'
          break

        case 'brown':
          backgroundColor = '#EBE4E4'
          borderColor = '#B2A1A1'
          imageColor = '#B2A1A1'
          break

        case 'primary':
          backgroundColor = '#E5F5FF'
          borderColor = '#0099FF'
          imageColor = '#0099FF'
          break

        case 'secondary':
          backgroundColor = '#FFF8ED'
          borderColor = '#F2A71B'
          imageColor = '#F2A71B'
          break

        default:
          backgroundColor = '#E5F5FF'
          borderColor = '#0099FF'
          imageColor = '#0099FF'
          break
      }
    }

    return [backgroundColor, imageColor, borderColor]
  }

  getFilledColor(color: Color) {
    let backgroundColor = '#0099FF'
    let borderColor = '#0099FF'
    let imageColor = 'white'

    if (color !== undefined) {
      switch (color) {
        case 'grey':
          backgroundColor = '#F5F2F2'
          imageColor = '#0099FF'
          break

        case 'purple':
          backgroundColor = '#EFDBFF'
          imageColor = '#531DAB'
          break

        case 'green':
          backgroundColor = '#D9F7BE'
          imageColor = '#389E0D'
          break

        case 'teal':
          backgroundColor = '#B5F5EC'
          imageColor = '#08979C'
          break

        case 'brown':
          backgroundColor = '#EBE4E4'
          imageColor = '#B2A1A1'
          break

        case 'primary':
          backgroundColor = '#0099FF'
          imageColor = 'white'
          break

        case 'secondary':
          backgroundColor = '#F2A71B'
          imageColor = 'white'
          break

        default:
          backgroundColor = '#E5F5FF'
          imageColor = '#0099FF'
          break
      }
    }

    return [backgroundColor, imageColor, borderColor]
  }
}
