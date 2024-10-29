// src/Components/ChatBot.js
import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const botpressScripts = [
      'https://cdn.botpress.cloud/webchat/v2.2/inject.js',
      'https://files.bpcontent.cloud/2024/10/04/13/20241004132940-Q67PKQ0T.js'
    ];

    const loadBotpress = async () => {
      try {
        for (const src of botpressScripts) {
          await loadScript(src);
        }
        console.log('Botpress scripts loaded successfully');
      } catch (error) {
        console.error(error);
      }
    };

    loadBotpress();

    return () => {
      botpressScripts.forEach((src) => {
        const scripts = document.querySelectorAll(`script[src="${src}"]`);
        scripts.forEach((script) => script.parentNode.removeChild(script));
      });
    };
  }, []);

  return null; // This component does not render anything visible
};

export default ChatBot;
