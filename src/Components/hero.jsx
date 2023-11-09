
function Hero() {
  return (
<section className="p-4">
<div className="bg-white shadow-xl rounded-lg ">
{/* Svg */}
  <div className="bg-violet-500 p-8 text-white grid place-items-center rounded-t-lg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
  <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
  <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
</svg>
  </div>
{/* Svg */}
<div className="p-10">
  {/* Paragraph and input and button */}
  <p>
    {/* Paragraph */}
    Get notified of all the updates.
  </p>
  {/* Form */}
<form action="" className="">
  <input type="email" placeholder="Enter your email"/><button type="submit">Notify me</button>
</form>
  {/* Form */}

</div>
</div>
</section>
  );
}

export default Hero;
