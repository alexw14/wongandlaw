import React from 'react';

const LanguageBar: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-end bg-white">
      <a href="/en" className="mx-2 flex items-center">
        <span className="mr-1" role="img" aria-label="US Flag">
          🇺🇸
        </span>
        EN
      </a>
      <a href="/zh-HK" className="mx-2 flex items-center">
        <span className="mr-1" role="img" aria-label="Hong Kong Flag">
          🇭🇰
        </span>
        繁體
      </a>
      <a href="/zh-CN" className="mx-2 flex items-center">
        <span className="mr-1" role="img" aria-label="China Flag">
          🇨🇳
        </span>
        简体
      </a>
    </div>
  );
};

export default LanguageBar;
