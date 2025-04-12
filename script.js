function generateAd() {
  const name = document.getElementById("businessName").value.trim();
  const platform = document.getElementById("platform").value;
  if (!name) return alert("Please enter your business name.");

  let headline = "";
  let description = "";
  let cta = "";

  switch(platform) {
    case "Facebook":
      headline = `Grow with ${name}`;
      description = `Join thousands discovering ${name} – fast, easy, and effective!`;
      cta = "Try Now on Facebook";
      break;
    case "Instagram":
      headline = `${name} – Your Insta Fame Starts Here!`;
      description = `Stylish, powerful & made for you. Discover more with ${name}`;
      cta = "Tap to Explore";
      break;
    case "Google Ads":
      headline = `Need ${name}? We Got You.`;
      description = `Search ends here. Discover premium services with ${name}.`;
      cta = "Get Started";
      break;
    case "YouTube":
      headline = `Watch ${name} in Action`;
      description = `Don’t just read, watch the magic of ${name}.`;
      cta = "Subscribe Now";
      break;
    case "LinkedIn":
      headline = `Level Up with ${name}`;
      description = `Professionals trust ${name} to get results.`;
      cta = "Connect with Us";
      break;
    case "Twitter":
      headline = `${name} is Trending Now!`;
      description = `#1 in buzz. #1 in value. ${name} is what everyone’s tweeting about.`;
      cta = "Tweet with Us";
      break;
    default:
      headline = `${name} – Your Next Big Move`;
      description = `Discover, engage, and grow with ${name}. Made for every platform.`;
      cta = "Check it Out";
  }

  document.getElementById("headline").innerText = headline;
  document.getElementById("description").innerText = description;
  document.getElementById("cta").innerText = cta;
  document.getElementById("output").style.display = "block";
}

function copyAd() {
  const headline = document.getElementById("headline").innerText;
  const description = document.getElementById("description").innerText;
  const cta = document.getElementById("cta").innerText;
  const fullText = `Headline: ${headline}\nDescription: ${description}\nCall to Action: ${cta}`;
  navigator.clipboard.writeText(fullText).then(() => alert("Ad copied to clipboard!"));
}
