function Footer() {
  return (
    <div className='grid  grid-cols-2 w-full text-white justify-items-center  h-96 bg-gradient-to-r from-black to-red-500 flex items-center justify-center'>
    <div>
        <div className='text-3xl'>Contact:</div>
        <div>Dr. Xinru Wang</div>
        <div>wangxin@upstate.edu</div>
    </div>
    <div>
        <div className='text-3xl'>Location:</div>
        <div>4th Floor 4205</div>
        <div>Institute For Human Performance (IHP)</div>
        <div>505 Irving Avenue</div>
        <div>Syracuse, NY 13210</div>
    </div>
    </div>
  );
}

export default Footer;
