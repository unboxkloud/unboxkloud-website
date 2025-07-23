import c1 from "../assets/c (1).png";
import c2 from "../assets/c (2).png";
import c3 from "../assets/c (3).png";
import c4 from "../assets/c (4).png";
import c5 from "../assets/c (5).png";
import c6 from "../assets/c (6).png";
import c7 from "../assets/c (7).png";
import c8 from "../assets/c (8).png";
import c9 from "../assets/c (9).png";
import c10 from "../assets/c (10).png";
import c11 from "../assets/c (11).png";
import c12 from "../assets/c (12).png";
import c13 from "../assets/c (13).png";
import c14 from "../assets/c (14).png";
import c15 from "../assets/c (15).png";
import c16 from "../assets/c (16).png";
import c17 from "../assets/c (17).png";
import c18 from "../assets/c (18).png";
import c19 from "../assets/c (19).png";
import c20 from "../assets/c (20).png";
import c21 from "../assets/c (21).png";
import c22 from "../assets/c (22).png";
import c23 from "../assets/c (23).png";
import c24 from "../assets/c (24).png";
import c25 from "../assets/c (25).png";
import c26 from "../assets/c (26).png";
import c27 from "../assets/c (27).png";
import c28 from "../assets/c (28).png";
import c29 from "../assets/c (29).png";
import c30 from "../assets/c (30).png";
import c31 from "../assets/c (31).png";
import c32 from "../assets/c (32).png";
import c33 from "../assets/c (33).png";
import c34 from "../assets/c (34).png";
import c35 from "../assets/c (35).png";
import c36 from "../assets/c (36).png";
import c37 from "../assets/c (37).png";
import c38 from "../assets/c (38).png";
import c39 from "../assets/c (39).png";
import c40 from "../assets/c (40).png";
import c41 from "../assets/c (41).png";
import c42 from "../assets/c (42).png";
import c43 from "../assets/c (43).png";
import c44 from "../assets/c (44).png";
import c45 from "../assets/c (45).png";
import c46 from "../assets/c (46).png";
import c47 from "../assets/c (47).png";

const companyLogos = [
  {
    src: c1,
    alt: "c1 logo",
  },
  {
    src: c2,
    alt: "c2 logo",
  },
  {
    src: c3,
    alt: "c3 logo",
  },
  {
    src: c4,
    alt: "c4 logo",
  },
  {
    src: c5,
    alt: "c5 logo",
  },
  {
    src: c6,
    alt: "c6 logo",
  },
  {
    src: c7,
    alt: "c7 logo",
  },
  {
    src: c8,
    alt: "c8 logo",
  },
  {
    src: c9,
    alt: "c9 logo",
  },
  {
    src: c10,
    alt: "c10 logo",
  },
  {
    src: c11,
    alt: "c11 logo",
  },
  {
    src: c12,
    alt: "c12 logo",
  },
  {
    src: c13,
    alt: "c13 logo",
  },
  {
    src: c14,
    alt: "c14 logo",
  },
  {
    src: c15,
    alt: "c15 logo",
  },
  {
    src: c16,
    alt: "c16 logo",
  },
  {
    src: c17,
    alt: "c17 logo",
  },
  {
    src: c18,
    alt: "c18 logo",
  },
  {
    src: c19,
    alt: "c19 logo",
  },
  {
    src: c20,
    alt: "c20 logo",
  },
  {
    src: c21,
    alt: "c21 logo",
  },
  {
    src: c22,
    alt: "c22 logo",
  },
  {
    src: c23,
    alt: "c23 logo",
  },
  {
    src: c24,
    alt: "c24 logo",
  },
  {
    src: c25,
    alt: "c25 logo",
  },
  {
    src: c26,
    alt: "c26 logo",
  },
  {
    src: c27,
    alt: "c27 logo",
  },
  {
    src: c28,
    alt: "c28 logo",
  },
  {
    src: c29,
    alt: "c29 logo",
  },
  {
    src: c30,
    alt: "c30 logo",
  },
  {
    src: c31,
    alt: "c31 logo",
  },
  {
    src: c32,
    alt: "c32 logo",
  },
  {
    src: c33,
    alt: "c33 logo",
  },
  {
    src: c34,
    alt: "c34 logo",
  },
  {
    src: c35,
    alt: "c35 logo",
  },
  {
    src: c36,
    alt: "c36 logo",
  },
  {
    src: c37,
    alt: "c37 logo",
  },
  {
    src: c38,
    alt: "c38 logo",
  },
  {
    src: c39,
    alt: "c39 logo",
  },
  {
    src: c40,
    alt: "c40 logo",
  },
  {
    src: c41,
    alt: "c41 logo",
  },
  {
    src: c42,
    alt: "c42 logo",
  },
  {
    src: c43,
    alt: "c43 logo",
  },
  {
    src: c44,
    alt: "c44 logo",
  },
  {
    src: c45,
    alt: "c45 logo",
  },
  {
    src: c46,
    alt: "c46 logo",
  },
  {
    src: c47,
    alt: "c47 logo",
  },
];

export function CompaniesSection() {
  return (
    <section className="py-8 px-4 md:px-[100px]">
      <h2 className="text-4xl font-bold text-center text-[#19191A] mb-10">
        Our Students Works in
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex min-w-max">
              {companyLogos.slice(0, 6).map((logo, index) => (
                <div
                  key={index}
                  className="mx-8 w-[180px] h-[64px] flex items-center justify-center"
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={180}
                    height={64}
                    className="w-[180px] h-[64px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
