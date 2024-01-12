chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "applyStyle") {
    var ddElements = document.querySelectorAll("dd");

    for (var i = 0; i < ddElements.length; i++) {
      var textareaChild = ddElements[i].querySelector("textarea");

      if (textareaChild && !ddElements[i].hasAttribute("data-buttons-added")) {
        ddElements[i].setAttribute("data-buttons-added", "true");

        ddElements[i].style.height = "500px";

        var buttonTexts = [
          "Forum Kuralları İhlali | Bu konu/mesaj forum kuralları madde <sayı> gereği hatalı.",
          "Bölüm Kuralları İhlali | Bu konu/mesaj bölüm kuralları madde <sayı> gereği hatalı.",
          "Uygunsuz Mesaj | Bu mesaj uygunsuz olduğu için silinmeli.",
          "Yanlış Kategori | Konunun kategorisi yanlış, \"<bölüm_ismi>\" kısmına taşınabilir.",
          "Flood Mesaj | #<sayı> sayılı mesajlar flood olduğu için, birleştirilmeli.",
          "Anlamsız Başlık | Başlık konuyu tanımlamıyor. \"<başlık_öneri>\" şeklinde değiştirilebilir.",
          "Başlıkta Yasaklı Kelime | Başlıkta \"Hakkında/Acil/Hk/Lütfen/Yardım\" gibi kelimelerin kullanımı yasaktır, başlık \"<başlık_öneri>\" şeklinde düzenlenebilir.",
          "Tamamı Büyük Başlık/İçerik | Başlığın/içeriğin tamamı büyük.",
          "Yardım Amaçlı Olmayan Mesaj | Yardım amaçlı olmadığı için, kaldırılabilir.",
          "Multi Konu | Konu multi konu olduğu için çöpe taşınabilir. \nMulti konu: \"<mutli_konu_linki>\"",
          "Kişisel İstek | Bu konu/mesaj kişisel istek de bulunduğu için, kaldırılabilir.",
          "VirusTotalsiz Link | Konu da VirusTotal bulunmuyor, çöpe taşınabilir.",
          "Konu Altında Tartışma | Tartışma amaçlı mesaj(lar) olduğu için silinebilir.",
          "Yetersiz İçerik | Konu içeriği yetersiz olduğu için çöpe taşınabilir.",
          "İllegal İçerik | Konu/mesaj illegal içeriğe sahip olduğu için kaldırılabilir.",
          "Misyona Aykırı İçerik | Konu/mesaj misyona aykırı olduğu için, çöpe taşınabilir.",
          "Yanlış Ticaret | Konu ticaret kurallarına uymadığı için, çöpe taşınabilir.",
          "İletişim Bilgisi | Konu da / mesaj da iletişim bilgisi vermiş, o kısımlar kaldırılmalı.",
          "Reklam | Konu izinsiz reklam yapıyor, çöpe taşınabilir.",
          "Kişisel Bilgi | Konu da / mesaj da kişisel bilgi vermiş, o kısımlar kaldırılmalı.",
          "Reklam | Konu izinsiz reklam yapıyor, çöpe taşınabilir.",
          "Yetkisiz Uyarı | Üye yetkisi olmadığı halde, konu altında uyarı yapmış. Mesaj kaldırılabilir.",
          "Paylaşım Kuralı İhlali | Konu paylaşım kurallarını ihlal ediyor, çöpe kaldırılabilir.",
          "1 Haftayı Geçmiş (AYK) | Konu açılalı bir haftayı geçtiği için kilitlenebilir.",
          "Başlıkta Kullanıcı Adı | Başlığa kullanıcı adı yazmak yasaktır, o kısım kaldırılabilir.",
          "Başlıkta Emoji | Başlığa emoji koymak yasaktır, o kısım kaldırılabilir.",
          "Telif Hakkı | İçerik telif hakkı içerdiğinden kaldırılabilir.",
          "Gruplaşma | Üye gruplaşmaya çalışıyor, mesaj/konu kaldırılabilir.",
          "Çalıntı Kredi Kartı İçeriği | Forum da CC vb. konular yasaktır, konu/mesaj kaldırılmalı.",
          "Gifli Profil | Üye V.I.P. veya Ü.D.Y. olmamasına rağmen .gifli profil resmi kullanıyor, profil kaldırılmalı.",
          "Siyaset İçerikli Konu/Mesaj | Siyaset içerikli konular/mesajlar yasaktır, konu/mesaj kaldırılabilir.",
          "İmza Olmayan Görsel | Tasarımda imza bulunmadığı için çöpe kaldırılmalı."
        ];

        for (var j = 0; j < buttonTexts.length; j++) {
          var inputElement = document.createElement("input");
          inputElement.type = "button";
          inputElement.value = buttonTexts[j].split(" | ")[0];
          ddElements[i].appendChild(inputElement);

          inputElement.style.color = "white";
          inputElement.style.width = "auto";
          inputElement.style.height = "40px";
          inputElement.style.background = "#282828";
          inputElement.style.border = "1px solid #282828";
          inputElement.style.borderRadius = "3px";
          inputElement.style.margin = "3px";
          inputElement.style.cursor = "pointer";
          inputElement.style.transition = "background 0.2s";
          inputElement.style.margin = "3px";
          inputElement.style.marginLeft = "0px";
          inputElement.style.marginRight = "6px";

          inputElement.addEventListener("mouseover", function() {
            this.style.background = "#3C3C3C";
          });

          inputElement.addEventListener("mouseout", function() {
            this.style.background = "#282828";
          });


          (function(index, text) {
            inputElement.addEventListener("click", function() {
              var textareaChild = ddElements[index].querySelector("textarea");
              if (textareaChild) {
                textareaChild.value = text.split(" | ")[1] + "\n";
              }
            });
          })(i, buttonTexts[j]);
        }

        textareaChild.style.marginBottom = "5px";
      }
    }
  }
});