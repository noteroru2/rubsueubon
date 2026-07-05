/**
 * Privacy-safe event tracking helper for CTAs.
 * Avoids tracking any PII (names, phone numbers, exact messages, serial numbers).
 */

interface TrackingParams {
  cta_location: 'sticky' | 'hero' | 'mid_content' | 'footer' | 'what_to_send' | string;
  product_group: 'phone' | 'ipad' | 'macbook' | 'camera' | 'pc_parts' | 'game_console' | 'b2b' | 'default' | string;
  page_type: 'service' | 'area' | 'blog' | 'case' | 'home' | string;
  page_path?: string;
  cta_type?: 'line' | 'phone' | string;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function trackCtaClick(
  eventName: 'line_cta_click' | 'phone_cta_click' | 'estimate_cta_click' | 'sticky_cta_click' | 'what_to_send_cta_click',
  params: TrackingParams
) {
  if (typeof window === 'undefined') return;

  const trackingData = {
    ...params,
    page_path: params.page_path || window.location.pathname,
  };

  // Push to dataLayer (GTM)
  if (window.dataLayer && typeof window.dataLayer.push === 'function') {
    try {
      window.dataLayer.push({
        event: eventName,
        ...trackingData,
      });
    } catch (e) {
      console.warn('dataLayer push failed:', e);
    }
  }

  // Push via gtag.js (GA4)
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, trackingData);
    } catch (e) {
      console.warn('gtag call failed:', e);
    }
  }
}
