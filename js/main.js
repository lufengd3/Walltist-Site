// App Landing Page JavaScript

// 滚动动画 - 使用 Intersection Observer API
document.addEventListener('DOMContentLoaded', function() {
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
});


// 图片懒加载和错误处理
document.addEventListener('DOMContentLoaded', function() {
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
});