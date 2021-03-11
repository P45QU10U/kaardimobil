import Img from 'next/image';

export function BackgroundImage({
  src,
  bgcolor = 'bg-white',
  bgopacity = 'bg-opacity-40',
  imgOpacity = 'opacity-20',
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${bgcolor} ${bgopacity}`}>
      {src ? (
        <Img
          layout="fill"
          // layout="responsive"
          // width={400}
          // height={300}
          className={imgOpacity}
          objectFit="cover"
          src={src}
          alt=""
        />
      ) : null}
      <div className="absolute -bottom-16 -left-5 -right-5 h-24 bg-white" />
    </div>
  );
}
