import React from "react";

const KEYWORDS = [
  'Senior Android Engineer', 'Clean Architecture', 'Kotlin Coroutines', 'Jetpack Compose',
  'Material Design', 'Tap on Phone', 'JavaScript bridges', 'ViewBinding/XML',
  'Firebase Crashlytics', 'Reactive programming with BFF', 'AI-assisted development',
  'software architecture', 'Google Play', 'CI&T', 'Kotlin', 'MVVM', 'NFC', 'ViewBinding',
  'WebView', 'Espresso', 'Robolectric', 'Coroutines', 'Room', 'Retrofit', 'Firebase',
  'Koin', 'LiveData', 'ViewModel', 'Flow', 'Cielo', 'Hilt', 'Dagger', 'RxJava', 'Java',
  'Android', 'GitHub', 'CI/CD', 'Jenkins', 'Appium', 'Selenium', 'BDD', 'Gherkin',
  'Cucumber', 'JUnit', 'SharedPreferences', 'SDK', 'SDKs', '1M+', '5M+', '5+ years',
];

const KEYWORDS_SORTED = [...KEYWORDS].sort((a, b) => b.length - a.length);
const KEYWORDS_REGEX = new RegExp(
  `(${KEYWORDS_SORTED.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'g'
);

export function highlightKeywords(text) {
  return text.split(KEYWORDS_REGEX).map((part, i) =>
    KEYWORDS.includes(part)
      ? <span key={i} style={{ fontWeight: 600, color: '#111111' }}>{part}</span>
      : part
  );
}
