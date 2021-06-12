import AvatarIcon from './AvatarIcon'

export const Avatar = (props: any) => {
  let background_color = '#0099FF'
  let border = ''
  let border_color = '#0099FF'
  let image_color = 'white'
  let shadow = false

  if (
    props.avatar_type == 'outlined-shadow' ||
    props.avatar_type == 'filled-shadow'
  ) {
    shadow = true
  }

  if (props.avatar_type == 'filled' || props.avatar_type == 'filled-shadow') {
    ;[background_color, image_color, border_color] = getFilledColor(props)
  }

  if (
    props.avatar_type == 'outlined' ||
    props.avatar_type == 'outlined-shadow'
  ) {
    border = '2px'
    ;[background_color, image_color, border_color] = getOutlinedColor(props)
  }

  console.log(background_color, image_color, border_color)

  return (
    <div
      style={{
        width: '5rem',
        height: '5rem',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'font-size': props.image_type == 'letter' ? '1.5rem' : '1rem',
        'background-color': background_color,
        'border-width': border,
        'border-style': 'solid',
        'border-color': border_color,
        'border-radius': props.shape == 'square' ? '20px' : '50%',
        color: image_color,
        'box-shadow': shadow
          ? '0px 2px 4px rgba(18, 17, 17, 0.04), 0px 8px 16px rgba(113, 112, 112, 0.16)'
          : 'none',
      }}
    >
      {getImage(props, image_color)}
    </div>
  )
}

function getImage(props: any, image_color: string) {
  let icon = <AvatarIcon color={image_color} />
  if (props.image_type == 'image') {
    icon = <img width="100%" src={props.image_path} alt="Image" />
  }
  if (props.image_type == 'letter') {
    icon = props.letters
  }

  return icon
}

function getOutlinedColor(props: any) {
  let background_color = '#E5F5FF'
  let border_color = '#0099FF'
  let image_color = '0099FF'

  if (props.color !== undefined) {
    switch (props.color) {
      case 'gray':
      case 'light':
      case 'grey':
        background_color = '#F5F2F2'
        border_color = '#EBE4E4'
        image_color = '#0099FF'
        break

      case 'purple':
        background_color = '#EFDBFF'
        border_color = '#531DAB'
        image_color = '#531DAB'
        break

      case 'green':
        background_color = '#D9F7BE'
        border_color = '#389E0D'
        image_color = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        background_color = '#B5F5EC'
        border_color = '#08979C'
        image_color = '#08979C'
        break

      case 'brown':
        background_color = '#EBE4E4'
        border_color = '#B2A1A1'
        image_color = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        background_color = '#E5F5FF'
        border_color = '#0099FF'
        image_color = '#0099FF'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        background_color = '#FFF8ED'
        border_color = '#F2A71B'
        image_color = '#F2A71B'
        break

      default:
        background_color = '#E5F5FF'
        border_color = '#0099FF'
        image_color = '#0099FF'
        break
    }
  }

  return [background_color, image_color, border_color]
}

function getFilledColor(props: any) {
  let background_color = '#0099FF'
  let border_color = '#0099FF'
  let image_color = 'white'

  if (props.color !== undefined) {
    switch (props.color) {
      case 'gray':
      case 'light':
      case 'grey':
        background_color = '#F5F2F2'
        image_color = '#0099FF'
        break

      case 'purple':
        background_color = '#EFDBFF'
        image_color = '#531DAB'
        break

      case 'green':
        background_color = '#D9F7BE'
        image_color = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        background_color = '#B5F5EC'
        image_color = '#08979C'
        break

      case 'brown':
        background_color = '#EBE4E4'
        image_color = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        background_color = '#0099FF'
        image_color = 'white'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        background_color = '#F2A71B'
        image_color = 'white'
        break

      default:
        background_color = '#E5F5FF'
        image_color = '#0099FF'
        break
    }
  }

  return [background_color, image_color, border_color]
}
