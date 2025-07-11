import React from 'react';

const LanguageBar: React.FC = () => {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto flex justify-end">
        <a href="/en" className="">English</a>
        <a href="/zh-HK" className="">繁體中文</a>
        <a href="/zh-CN" className="">简体中文</a>
      </div>
    </div>
  );
}

export default LanguageBar; 