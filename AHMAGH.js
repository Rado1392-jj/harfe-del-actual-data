const txt = document.getElementById("txt");
      txt.addEventListener("input", function () {
        if (txt.value.toLowerCase() === "عقده ای") {
          document.getElementById("mp4").play();
        } else if (txt.value === "69") {
          // Redirect to the video page
          window.location.href = "video.html";
        } else if (
          txt.value === "طراح این وبسایت خیلی اسکله" ||
          txt.value === "اسکل" ||
          txt.value === "احمق" ||
          txt.value === "این چه وبسایت انیه" ||
          txt.value === "این چه وبسایت گوهیه" ||
          txt.value === "ریدم دهن طراح این وبسایت" ||
          txt.value === "ان" ||
          txt.value == "خدا تمام طراحان مریض رو شفا بده" ||
          txt.value === "به تو چه حرف دل من چیه" ||
          inputValue === "بابا گی" ||
          inputValue === "رادین گی"
        ) {
          window.location.href = "jumpy.html";
        }
          
        else if (
          txt.value === "طراح این وبسایت خیلی ادم باحالیه" ||
          txt.value === "ناز این وبسایت" ||
          txt.value === "بنازم به این وبسایت" ||
          txt.value === "چه هنری" ||
          txt.value === "به به" ||
          inputValue === "بابا حرفه ای" ||
          inputValue === "ایول" ||
          inputValue === "عجب طراح خوبی"
        ) {
          window.location.href = "embed.html";
        }
      });
