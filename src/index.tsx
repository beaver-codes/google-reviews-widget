import React, { useEffect } from 'react';

interface Props {
  instanceId: string;
}

const WIDGET_SCRIPT_PATH = 'https://reviews.beaver.codes/widget/web-google-reviews.js';

function GoogleReviewsWidget({ instanceId }: Props) {
  useEffect(() => {
    const divRef = document.querySelector(`div[data-instance-id="${instanceId}"]`) as HTMLDivElement;
    if (!divRef) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = WIDGET_SCRIPT_PATH;

    divRef.append(script);

    return () => {
      divRef.removeChild(script);
    };
  }, [instanceId]);

  return <div data-instance-id={instanceId} />;
}

export default GoogleReviewsWidget;
