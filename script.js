// 平滑滚动到各个部分
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// 开始学习按钮平滑滚动
document.querySelector('.btn').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('#vocabulary').offsetTop - 70,
        behavior: 'smooth'
    });
});

// 单词发音功能
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const word = this.closest('.card').querySelector('.card-front h3').textContent;
        speakWord(word);
    });
});

function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音合成功能');
    }
}

// 听力练习提交功能
document.querySelector('.submit-btn').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    if (selectedOption) {
        if (selectedOption.value === 'B') {
            alert('回答正确！');
        } else {
            alert('回答错误，请再试一次。');
        }
    } else {
        alert('请选择一个选项');
    }
});

// 添加滚动动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// 添加音频播放器的控制
const audioElement = document.querySelector('audio');
if (audioElement) {
    audioElement.addEventListener('play', function() {
        console.log('音频开始播放');
    });
    
    audioElement.addEventListener('ended', function() {
        console.log('音频播放结束');
    });
}

// 添加响应式导航栏
function toggleNav() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

// 监听窗口大小变化
window.addEventListener('resize', function() {
    const navUl = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        navUl.classList.remove('active');
    }
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// 初始设置
window.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
});