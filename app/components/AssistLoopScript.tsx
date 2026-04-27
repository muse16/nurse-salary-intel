"use client";
import Script from "next/script";

export default function AssistLoopScript() {
  return (
    <Script
      src="https://assistloop.ai/assistloop-widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        (window as Window & { AssistLoopWidget?: { init: (o: { agentId: string | undefined }) => void } }).AssistLoopWidget?.init({
          agentId: process.env.NEXT_PUBLIC_ASSISTLOOP_AGENT_ID,
        });
        setTimeout(() => {
          document.querySelectorAll<HTMLIFrameElement>('iframe:not([title])').forEach((iframe) => {
            iframe.title = 'Chat support widget';
          });
        }, 2000);
      }}
    />
  );
}
