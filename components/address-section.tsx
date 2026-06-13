export default function AddressSection() {
  return (
    <section className="px-[5%] pb-12 lg:pb-20">
      <div className="mx-auto grid max-w-[1486px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Office details */}
        <div>
          <h2 className="mb-5 text-[clamp(1.2rem,2vw,2rem)] font-semibold text-[#0e3874]">
            Head Office
          </h2>
          <div className="space-y-2 text-[clamp(0.76rem,1.04vw,1.3rem)] leading-relaxed text-black">
            <p>
              <span className="font-medium">Location:</span> Tetteh Okuley
              Avenue Abofu Off Achimota School Road
            </p>
            <p>
              <span className="font-medium">Post Office Address:</span>
              {"  "}P.O Box LG 723
            </p>
            <p>
              <span className="font-medium">Telephone No.:</span> (233)0303
              934116 / (233) 27 7603276
            </p>
            <p>
              <span className="font-medium">Fax No.:</span> (233) 0302 407459
            </p>
          </div>
        </div>

        {/* Join us card */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex w-full max-w-98.75 flex-col items-center justify-center rounded-[23px] bg-[#0e3874] px-7 py-5 text-center lg:py-7">
            <p className="text-[clamp(0.79rem,1.3vw,1.44rem)] leading-tight font-bold text-white">
              Thinking Of Joining Us Sell
            </p>

            <p className="text-[clamp(0.79rem,1.3vw,1.44rem)] leading-tight font-semibold text-[#ffc425]">
              Join Us
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
