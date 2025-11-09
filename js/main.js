// App Landing Page JavaScript

// ============================================
// 多语言支持
// ============================================

// 翻译数据
const translations = {
  zh: {
    'meta.title': 'Walltist - 壁纸艺术家',
    'meta.description': 'Walltist (壁纸艺术家) - iOS 个性化壁纸管理应用，帮助您发现、整理和应用相册中的精美壁纸',
    'meta.ogTitle': 'Walltist - 壁纸艺术家',
    'meta.ogDescription': 'iOS 个性化壁纸管理应用，帮助您发现、整理和应用相册中的精美壁纸',
    'meta.ogLocale': 'zh_CN',
    'meta.twitterTitle': 'Walltist - 壁纸艺术家',
    'meta.twitterDescription': 'iOS 个性化壁纸管理应用，帮助您发现、整理和应用相册中的精美壁纸',
    'nav.languageLabel': '选择语言',
    'hero.title': '发现相册中的壁纸艺术',
    'hero.subtitle': 'iOS 个性化壁纸管理应用，轻松发现、整理和应用您相册中的精美照片作为壁纸',
    'features.title': '核心功能',
    'features.random.title': '🎲 随机照片发现',
    'features.random.description': '小组件和应用随机展示相册照片，配备快捷操作按钮（收藏、刷新、删除）',
    'features.organize.title': '📁 智能整理',
    'features.organize.description': '根据照片宽高比自动分类整理到壁纸集合，收藏的照片自动归入"Walltist"相册',
    'features.widget.title': '📱 小组件集成',
    'features.widget.description': 'iOS 小组件支持，直接在主屏幕或桌面快速浏览和管理照片',
    'features.sync.title': '🔄 跨设备同步',
    'features.sync.description': '通过本地网络在 iOS 和 Mac/PC 之间同步，远程设置壁纸',
    'features.oneclick.title': '⚡ 一键操作',
    'features.oneclick.description': '快速管理照片，一键收藏、隐藏或删除，让照片管理变得轻松简单',
    'features.seamless.title': '✨ 无缝体验',
    'features.seamless.description': '小组件功能与应用完全同步，在任何地方都能获得一致的使用体验',
    'footer.copyright': '© 2025 Walltist. 保留所有权利。'
  },
  en: {
    'meta.title': 'Walltist - Wallpaper Artist',
    'meta.description': 'Walltist - iOS personalized wallpaper management app, helping you discover, organize and apply beautiful wallpapers from your photo library',
    'meta.ogTitle': 'Walltist - Wallpaper Artist',
    'meta.ogDescription': 'iOS personalized wallpaper management app, helping you discover, organize and apply beautiful wallpapers from your photo library',
    'meta.ogLocale': 'en_US',
    'meta.twitterTitle': 'Walltist - Wallpaper Artist',
    'meta.twitterDescription': 'iOS personalized wallpaper management app, helping you discover, organize and apply beautiful wallpapers from your photo library',
    'nav.languageLabel': 'Select Language',
    'hero.title': 'Discover Wallpaper Art in Your Photos',
    'hero.subtitle': 'iOS personalized wallpaper management app, easily discover, organize and apply beautiful photos from your library as wallpapers',
    'features.title': 'Core Features',
    'features.random.title': '🎲 Random Photo Discovery',
    'features.random.description': 'Widget and app randomly display photos from your library, with quick action buttons (favorite, refresh, delete)',
    'features.organize.title': '📁 Smart Organization',
    'features.organize.description': 'Automatically categorize photos into wallpaper collections based on aspect ratio, favorited photos are automatically added to "Walltist" album',
    'features.widget.title': '📱 Widget Integration',
    'features.widget.description': 'iOS widget support, quickly browse and manage photos directly from your home screen or desktop',
    'features.sync.title': '🔄 Cross-Device Sync',
    'features.sync.description': 'Sync between iOS and Mac/PC over local network, remotely set wallpapers',
    'features.oneclick.title': '⚡ One-Click Actions',
    'features.oneclick.description': 'Quickly manage photos, favorite, hide or delete with one click, making photo management effortless',
    'features.seamless.title': '✨ Seamless Experience',
    'features.seamless.description': 'Widget functionality fully synced with the app, consistent experience everywhere',
    'footer.copyright': '© 2025 Walltist. All rights reserved.'
  }
};

// 获取用户首选语言
function getPreferredLanguage() {
  // 1. 检查 localStorage 中保存的语言选择
  const savedLang = localStorage.getItem('walltist-language');
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }
  
  // 2. 检查 URL 参数
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && translations[urlLang]) {
    return urlLang;
  }
  
  // 3. 检测浏览器语言
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('zh')) {
    return 'zh';
  } else if (browserLang.startsWith('en')) {
    return 'en';
  }
  
  // 4. 默认返回英文
  return 'en';
}

// 应用翻译
function applyTranslations(lang) {
  const translation = translations[lang];
  if (!translation) return;
  
  // 更新 HTML lang 属性
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  // 更新页面标题
  const titleElement = document.querySelector('title');
  if (titleElement) {
    titleElement.textContent = translation['meta.title'];
  }
  
  // 更新 meta 标签
  const metaElements = document.querySelectorAll('meta[data-i18n-key]');
  metaElements.forEach(meta => {
    const key = meta.getAttribute('data-i18n-key');
    if (translation[key]) {
      if (meta.hasAttribute('property')) {
        meta.setAttribute('content', translation[key]);
      } else if (meta.hasAttribute('name')) {
        meta.setAttribute('content', translation[key]);
      }
    }
  });
  
  // 更新带有 data-i18n 属性的元素
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translation[key]) {
      element.textContent = translation[key];
    }
  });
  
  // 更新语言选择器的值
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// 切换语言
function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  // 保存语言选择到 localStorage
  localStorage.setItem('walltist-language', lang);
  
  // 应用翻译
  applyTranslations(lang);
  
  // 更新 URL（不刷新页面）
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

// 初始化多语言功能
function initI18n() {
  const preferredLang = getPreferredLanguage();
  applyTranslations(preferredLang);
  
  // 监听语言选择器变化
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function(e) {
      switchLanguage(e.target.value);
    });
  }
}

// ============================================
// 滚动动画 - 使用 Intersection Observer API
// ============================================
function initScrollAnimations() {
  // 为需要动画的元素添加初始状态
  const animateElements = document.querySelectorAll('.feature-card, .screenshot-item');
  
  // 添加初始样式
  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // 创建 Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素进入视口时触发动画
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // 动画完成后停止观察
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 观察所有需要动画的元素
  animateElements.forEach(element => {
    observer.observe(element);
  });
}


// ============================================
// 图片懒加载和错误处理
// ============================================
function initImageHandling() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  // 为所有图片添加错误处理
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', function() {
      // 图片加载失败时显示占位符
      this.style.backgroundColor = '#f0f0f0';
      this.style.minHeight = '200px';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.alt = '图片加载失败';
    });
  });
  
  // 对于不支持原生懒加载的浏览器，使用 Intersection Observer
  if ('loading' in HTMLImageElement.prototype) {
    // 浏览器支持原生懒加载
    console.log('Native lazy loading supported');
  } else {
    // 使用 Intersection Observer 实现懒加载
    const lazyImageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          lazyImageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      lazyImageObserver.observe(img);
    });
  }
}

// ============================================
// 初始化所有功能
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // 初始化多语言功能
  initI18n();
  
  // 初始化滚动动画
  initScrollAnimations();
  
  // 初始化图片处理
  initImageHandling();
});