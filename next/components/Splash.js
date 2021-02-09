import Img from 'next/image';

export default function Splash({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent to-white">
      <div className="bg-gradient-to-b from-transparent to-blue-600">
        <Img
          layout="fill"
          className="opacity-20"
          objectFit="cover"
          src="/images/jesse-bowser-c0I4ahyGIkA-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="absolute z-10 inset-0">{children}</div>
    </div>
  );
}
