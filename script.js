function generateAd() {
  const name = document.getElementById("businessName").value.trim();
  const tagline = document.getElementById("tagline").value.trim();
  const cta = document.getElementById("cta").value.trim();
  const platform = document.getElementById("platform").value;

  if (!name || !tagline || !cta) return alert("Please fill all fields.");

  let headline = "";
  let description = "";

  switch(platform) {
    case "Facebook":
      headline = `Boost with ${name}`;
      description = `Start your journey with ${name} on Facebook`;
      break;
    case "Instagram":
      headline = `Explore ${name} on Instagram`;
      description = `${name} brings you stylish updates.`;
      break;
    case "Google Ads":
      headline = `Need ${name}? Get it on Google Ads`;
      description = `${name} offers the best service.`;
      break;
    case "YouTube":
      headline = `Watch ${name} in Action`;
      description = `See ${name} in action on YouTube`;
      break;
    case "LinkedIn":
      headline = `${name} – Join us on LinkedIn`;
      description = `${name} is growing, connect with professionals!`;
      break;
    default:
      headline = `${name} – A Better Choice`;
      description = `Discover the amazing benefits of ${name}.`;
  }

  document.getElementById("adHeadline").innerText = headline;
  document.getElementById("adDescription").innerText = description;
  document.getElementById("output").style.display = "block";
}

function downloadAd() {
  const adElement = document.getElementById("adPreview");
  html2canvas(adElement).then(function(canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'generated_ad.png';
    link.click();
  });
}