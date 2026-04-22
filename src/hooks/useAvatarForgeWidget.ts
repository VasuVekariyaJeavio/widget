import { useEffect } from 'react';

interface AvatarForgeOptions {
  widgetId: string;
  position?: string;
  theme?: string;
  buttonColor?: string;
  buttonText?: string;
  widgetSize?: string;
}

export function useAvatarForgeWidget(options: AvatarForgeOptions) {
  useEffect(() => {
    const GUARD_ATTR = 'data-avatarforge-loaded';
    if (document.querySelector(`script[${GUARD_ATTR}]`)) return;

    const script = document.createElement('script');
    script.src = 'https://avatarforge-dev.jeavio.com/widgets/widget.js';
    script.async = true;
    script.setAttribute(GUARD_ATTR, 'true');
    script.setAttribute('data-widget-id', options.widgetId);
    if (options.position)    script.setAttribute('data-position', options.position);
    if (options.theme)       script.setAttribute('data-theme', options.theme);
    if (options.buttonColor) script.setAttribute('data-button-color', options.buttonColor);
    if (options.buttonText)  script.setAttribute('data-button-text', options.buttonText);
    if (options.widgetSize)  script.setAttribute('data-widget-size', options.widgetSize);

    document.body.appendChild(script);

    return () => {
      const el = document.querySelector(`script[${GUARD_ATTR}]`);
      el?.remove();
    };
  }, []);
}
