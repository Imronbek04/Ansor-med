import React from "react";
import Img from "../img/img1.png";
import Img2 from "../img/img2.png";
import Img3 from "../img/img3.png";
import Img4 from "../img/img4.png";

export default function Service() {
  let arr = [
    {
      id: 1,
      img: Img,
      title: "Hijoma",
      text: `Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat
            qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan
            kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar
            kunlaridir).`,
    },
    {
      id: 2,
      img: Img2,
      title: "Manual Terapiya",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa
            sit amet elit viverra hendrerit.`,
    },
    {
      id: 3,
      img: Img3,
      title: "Zuluk bilan davolash",
      text: `Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία —
                «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash
                usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik
                sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.`,
    },
    {
      id: 4,
      img: Img4,
      title: "tabiy dori vositalari",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa
            sit amet elit viverra hendrerit.`,
    },
  ];
  return (
    <div>
      <section className="services" id="xizmatlar">
        <h2 className="services__title">Xizmatlar</h2>
        <div className="container services__container">
          {arr.map((item) => {
            return (
              <div key={item.id} className="services__card">
                <img src={item.img} alt="img" />
                <div className="services__card-info">
                  <h3 className="services__card__title">{item.title}</h3>
                  <p className="services__card__text">{item.text}.</p>
                </div>
              </div>
            );
          })}

          <div className="services__btn">
            <button className="btn">Qabulga yozilish</button>
          </div>
        </div>
      </section>
    </div>
  );
}
