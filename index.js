const apiKey = 'YOUR_API_KEY'; // OpenWeatherMap বা অন্য API থেকে পাওয়া কী

// ফাংশন যা লোকেশন থেকে আবহাওয়া ডেটা নেয়
async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  if (data.cod === 200) {
    console.log(data);
    // এখানে তুমি UI আপডেট করবে
  } else {
    console.log('Location not found');
  }
}

// ব্যবহারকারী ইনপুট
const location = 'Dhaka';  // ব্যবহারকারীর ইনপুট
getWeather(location);


async function getForecast(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`);
  const data = await response.json();
  console.log(data.daily); // 7 দিনের পূর্বাভাস
  // UI তে পূর্বাভাস দেখানোর কোড এখানে হবে
}

// Dhaka এর জন্য
getForecast();
