import { IKImage } from 'imagekitio-react'

const Image = ({path,classname,alt,w,h}) => {
  return (
    <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={path}
        transformation={[
          {
            height: h,
            width: w,
          },
        ]}
        alt={alt}
        className={classname}
        loading="lazy"
        lqip={{ active: true , quality: 20 }}
      />
  )
}

export default Image