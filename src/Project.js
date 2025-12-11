import React, { useState } from 'react';
import { Calendar, FileText, Pill, User, Bell, Clock, ChevronRight, Heart, Activity, MessageSquare, Phone, MapPin, Settings, LogOut, Home, BarChart3, Target, Utensils, Dumbbell, Users, BookOpen, Newspaper } from 'lucide-react';

export default function PatientPortal() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1));
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeSubMenu, setActiveSubMenu] = useState('goals');

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return { firstDay, daysInMonth };
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const calendarEvents = {
        '2025-12-10': [{ type: 'appointment', title: '김성민 교수 진료', time: '14:00' }],
        '2025-12-15': [{ type: 'appointment', title: '이지은 교수 진료', time: '10:30' }],
        '2025-12-20': [{ type: 'appointment', title: '박민수 교수 진료', time: '15:30' }],
        '2025-12-07': [
            { type: 'medication', title: '아스피린 복용', time: '아침' },
            { type: 'medication', title: '혈압약 복용', time: '저녁' }
        ],
        '2025-12-08': [
            { type: 'medication', title: '아스피린 복용', time: '아침' },
            { type: 'medication', title: '혈압약 복용', time: '저녁' }
        ],
        '2025-12-09': [
            { type: 'medication', title: '아스피린 복용', time: '아침' },
            { type: 'medication', title: '혈압약 복용', time: '저녁' }
        ]
    };

    const getEventForDay = (day) => {
        const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return calendarEvents[dateStr] || [];
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-lg flex flex-col">
                <div className="p-6 border-b">
                    <div className="flex items-center space-x-3">
                        <Heart className="w-10 h-10 text-blue-600" />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">메디케어</h1>
                            <p className="text-xs text-gray-500">환자 포털</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-b">
                    <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">빠른 작업</h3>
                    <div className="space-y-2">
                        <button className="w-full flex items-center space-x-3 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <Pill className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">약 복용 체크</p>
                                <p className="text-xs text-gray-500">오늘 3회 남음</p>
                            </div>
                        </button>

                        <button className="w-full flex items-center space-x-3 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Activity className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">혈압 기록</p>
                                <p className="text-xs text-gray-500">마지막: 어제</p>
                            </div>
                        </button>

                        <button className="w-full flex items-center space-x-3 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">긴급 예약</p>
                                <p className="text-xs text-gray-500">빠른 예약</p>
                            </div>
                        </button>
                    </div>
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <button onClick={() => setActiveMenu('home')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Home className="w-5 h-5" />
                                <span className="font-medium">홈</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveMenu('medical-info')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'medical-info' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <FileText className="w-5 h-5" />
                                <span className="font-medium">의료 정보</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveMenu('health-records')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'health-records' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <BarChart3 className="w-5 h-5" />
                                <span className="font-medium">건강 기록</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setActiveMenu('health-goals'); setActiveSubMenu('goals'); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'health-goals' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Target className="w-5 h-5" />
                                <span className="font-medium">건강 목표</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setActiveMenu('diet-management'); setActiveSubMenu('diet-plan'); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'diet-management' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Utensils className="w-5 h-5" />
                                <span className="font-medium">식단 기록</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setActiveMenu('exercise-management'); setActiveSubMenu('exercise-plan'); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'exercise-management' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Dumbbell className="w-5 h-5" />
                                <span className="font-medium">운동 관리</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveMenu('health')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'health' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Heart className="w-5 h-5" />
                                <span className="font-medium">건강 관리</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveMenu('messages')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-medium">메시지</span>
                                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setActiveMenu('community'); setActiveSubMenu('health-tips'); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'community' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Users className="w-5 h-5" />
                                <span className="font-medium">커뮤니티</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActiveMenu('calendar')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeMenu === 'calendar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">캘린더</span>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="p-4 border-t space-y-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">설정</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">로그아웃</span>
                    </button>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto">
                <header className="bg-white shadow-sm sticky top-0 z-10">
                    <div className="px-8 py-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">안녕하세요, 홍길동님</h2>
                            <p className="text-gray-600">오늘도 건강한 하루 되세요</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition">
                                <Bell className="w-6 h-6" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {isLoggedIn ? (
                                <button
                                    onClick={() => setActiveMenu('mypage')}
                                    className="flex items-center space-x-3 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                                >
                                    <User className="w-8 h-8 text-gray-600" />
                                    <div className="text-left">
                                        <p className="font-semibold text-gray-900">홍길동</p>
                                        <p className="text-xs text-gray-600">P-2024-1234</p>
                                    </div>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setActiveMenu('login')}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                                >
                                    로그인
                                </button>
                            )}
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {activeMenu === 'community' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">커뮤니티</h3>
                                <div className="flex space-x-2 mb-6 border-b">
                                    <button onClick={() => setActiveSubMenu('health-tips')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'health-tips' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>건강 팁</button>
                                    <button onClick={() => setActiveSubMenu('qa-board')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'qa-board' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>QA 게시판</button>
                                    <button onClick={() => setActiveSubMenu('medical-news')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'medical-news' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>의학 뉴스</button>
                                </div>

                                {activeSubMenu === 'health-tips' && (
                                    <div className="space-y-4">
                                        <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-20 h-20 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Heart className="w-10 h-10 text-emerald-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">겨울철 혈압 관리법</h4>
                                                    <p className="text-sm text-gray-600 mb-2">기온이 떨어지면 혈관이 수축되어 혈압이 올라갈 수 있습니다. 실내 온도를 적절히 유지하고...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>👁 523</span>
                                                        <span>💬 12</span>
                                                        <span>2025.12.05</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Activity className="w-10 h-10 text-blue-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">당뇨 환자를 위한 식단 가이드</h4>
                                                    <p className="text-sm text-gray-600 mb-2">혈당 관리를 위한 효과적인 식단 구성 방법과 피해야 할 음식들을 알아보세요...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>👁 847</span>
                                                        <span>💬 28</span>
                                                        <span>2025.12.03</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Dumbbell className="w-10 h-10 text-amber-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">올바른 스트레칭 방법</h4>
                                                    <p className="text-sm text-gray-600 mb-2">운동 전후 스트레칭으로 부상을 예방하고 효과를 높이는 방법...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>👁 1,234</span>
                                                        <span>💬 45</span>
                                                        <span>2025.12.01</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'qa-board' && (
                                    <div className="space-y-4">
                                        <div className="flex justify-end mb-4">
                                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">질문 작성</button>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <FileText className="w-5 h-5 text-gray-700" />
                                                <h4 className="text-lg font-bold text-gray-900">혈압약 복용 시간 관련 질문입니다</h4>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">✓ 답변완료</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">혈압약을 아침에 먹어야 하나요, 저녁에 먹어야 하나요?</p>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                <span>작성자: 홍길동</span>
                                                <span>2025.12.05</span>
                                                <span className="font-bold">답변: 1</span>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <FileText className="w-5 h-5 text-gray-700" />
                                                <h4 className="text-lg font-bold text-gray-900">MRI 검사 전 주의사항이 궁금합니다</h4>
                                                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">⏱ 답변대기</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">다음주에 MRI 검사가 예정되어 있는데...</p>
                                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                <span>작성자: 이영희</span>
                                                <span>2025.12.07</span>
                                                <span className="font-bold">답변: 0</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'medical-news' && (
                                    <div className="space-y-4">
                                        <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <Newspaper className="w-12 h-12 text-blue-600 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-2 inline-block">최신</span>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">새로운 당뇨병 치료법 임상 시험 성공</h4>
                                                    <p className="text-sm text-gray-600 mb-2">국내 연구진이 개발한 새로운 당뇨병 치료제가 3상 임상시험에서 유의미한 결과를 보였습니다...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>의학신문</span>
                                                        <span>2025.12.08</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 border-l-4 border-indigo-500 bg-indigo-50 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <Newspaper className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">고혈압 예방을 위한 생활습관 연구 발표</h4>
                                                    <p className="text-sm text-gray-600 mb-2">세계보건기구(WHO)가 고혈압 예방 가이드라인을 업데이트했습니다...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>헬스뉴스</span>
                                                        <span>2025.12.06</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 border-l-4 border-emerald-500 bg-emerald-50 rounded-lg hover:shadow-md transition cursor-pointer">
                                            <div className="flex items-start space-x-4">
                                                <Newspaper className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-2">AI를 활용한 암 조기 진단 기술 발전</h4>
                                                    <p className="text-sm text-gray-600 mb-2">인공지능을 활용한 의료 영상 분석 기술이 빠르게 발전하고 있습니다...</p>
                                                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                        <span>메디컬타임즈</span>
                                                        <span>2025.12.04</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeMenu === 'diet-management' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">식단 기록</h3>
                                <div className="flex space-x-2 mb-6 border-b">
                                    <button onClick={() => setActiveSubMenu('diet-plan')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'diet-plan' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>식단 계획</button>
                                    <button onClick={() => setActiveSubMenu('calorie')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'calorie' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>칼로리 계산</button>
                                    <button onClick={() => setActiveSubMenu('nutrition')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'nutrition' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>영양 분석</button>
                                    <button onClick={() => setActiveSubMenu('warnings')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'warnings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>문제점 제기</button>
                                </div>

                                {activeSubMenu === 'diet-plan' && (
                                    <div>
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                                                <h4 className="font-bold mb-2">아침</h4>
                                                <p className="text-sm text-gray-600">토스트 2장, 계란 2개</p>
                                                <p className="text-xs text-teal-600 mt-2 font-bold">450 kcal</p>
                                            </div>
                                            <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                                                <h4 className="font-bold mb-2">점심</h4>
                                                <p className="text-sm text-gray-600">현미밥, 닭가슴살, 샐러드</p>
                                                <p className="text-xs text-teal-600 mt-2 font-bold">650 kcal</p>
                                            </div>
                                            <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                                                <h4 className="font-bold mb-2">저녁</h4>
                                                <p className="text-sm text-gray-600">연어 구이, 브로콜리</p>
                                                <p className="text-xs text-teal-600 mt-2 font-bold">600 kcal</p>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold">식단 계획 수정</button>
                                    </div>
                                )}

                                {activeSubMenu === 'calorie' && (
                                    <div>
                                        <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg mb-4 border border-orange-200">
                                            <h4 className="font-bold mb-4">오늘 섭취 칼로리</h4>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-3xl font-bold">1,850</span>
                                                <span className="text-gray-600">/ 2,000 kcal</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-4">
                                                <div className="bg-orange-500 h-4 rounded-full" style={{ width: '92%' }}></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-bold">아침 - 토스트</span>
                                                    <span className="text-orange-600 font-bold">450 kcal</span>
                                                </div>
                                                <div className="text-sm text-gray-600 space-y-1">
                                                    <p>탄수화물: 60g | 단백질: 20g | 지방: 12g</p>
                                                </div>
                                            </div>
                                            <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-500 hover:text-orange-600">+ 식사 추가</button>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'nutrition' && (
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold mb-4">오늘의 영양소</h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm">탄수화물</span>
                                                        <span className="text-sm font-bold">230g / 250g</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm">단백질</span>
                                                        <span className="text-sm font-bold">85g / 100g</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm">지방</span>
                                                        <span className="text-sm font-bold">45g / 60g</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h4 className="font-bold mb-3">권장 사항</h4>
                                            <ul className="text-sm text-gray-700 space-y-2">
                                                <li>✓ 단백질 섭취가 적절합니다</li>
                                                <li>✓ 탄수화물 섭취가 양호합니다</li>
                                                <li>⚠ 나트륨 섭취를 줄이세요</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'warnings' && (
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                            <div className="flex items-start">
                                                <Bell className="w-5 h-5 text-red-600 mt-1 mr-3" />
                                                <div>
                                                    <h4 className="font-bold text-red-900 mb-2">⚠ 당 섭취 과다</h4>
                                                    <p className="text-sm text-gray-700">오늘 설탕 섭취량이 권장량의 150%를 초과했습니다. 당분 섭취를 줄이세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                                            <div className="flex items-start">
                                                <Bell className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                                                <div>
                                                    <h4 className="font-bold text-amber-900 mb-2">주의: 나트륨 섭취</h4>
                                                    <p className="text-sm text-gray-700">나트륨 섭취가 높습니다. 고혈압 환자는 저염식을 권장합니다.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                                            <h4 className="font-bold text-blue-900 mb-2">피해야 할 식재료</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">페니실린 (알레르기)</span>
                                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">고염식품</span>
                                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">고지방식품</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeMenu === 'exercise-management' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">운동 관리</h3>
                                <div className="flex space-x-2 mb-6 border-b">
                                    <button onClick={() => setActiveSubMenu('exercise-plan')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'exercise-plan' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>운동 계획</button>
                                    <button onClick={() => setActiveSubMenu('recommend')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'recommend' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>운동 추천</button>
                                    <button onClick={() => setActiveSubMenu('exercise-log')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'exercise-log' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>운동 기록</button>
                                </div>

                                {activeSubMenu === 'exercise-plan' && (
                                    <div>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                                <h4 className="font-bold mb-2">월/수/금 - 유산소</h4>
                                                <p className="text-sm text-gray-600">조깅 30분, 자전거 20분</p>
                                                <p className="text-xs text-orange-600 mt-2 font-bold">소모: ~400 kcal</p>
                                            </div>
                                            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                                <h4 className="font-bold mb-2">화/목/토 - 근력</h4>
                                                <p className="text-sm text-gray-600">상체 운동, 하체 운동</p>
                                                <p className="text-xs text-orange-600 mt-2 font-bold">소모: ~300 kcal</p>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold">운동 계획 수정</button>
                                    </div>
                                )}

                                {activeSubMenu === 'recommend' && (
                                    <div>
                                        <div className="p-4 bg-blue-50 rounded-lg mb-4 border border-blue-200">
                                            <h4 className="font-bold mb-2">맞춤형 운동 추천</h4>
                                            <p className="text-sm text-gray-600">고혈압 환자에게 적합한 운동을 추천합니다</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="p-4 border-2 border-emerald-500 bg-emerald-50 rounded-lg">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">걷기 운동</h4>
                                                        <p className="text-sm text-gray-600 mt-1">하루 30분, 주 5회</p>
                                                    </div>
                                                    <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded">추천</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-2">혈압 관리에 효과적이며 부담이 적습니다</p>
                                            </div>
                                            <div className="p-4 border rounded-lg">
                                                <h4 className="font-bold text-gray-900 mb-1">수영</h4>
                                                <p className="text-sm text-gray-600">주 2-3회, 30분</p>
                                                <p className="text-xs text-gray-600 mt-2">전신 운동으로 심혈관 건강에 좋습니다</p>
                                            </div>
                                            <div className="p-4 border rounded-lg">
                                                <h4 className="font-bold text-gray-900 mb-1">요가</h4>
                                                <p className="text-sm text-gray-600">주 2회, 40분</p>
                                                <p className="text-xs text-gray-600 mt-2">스트레스 감소와 유연성 향상</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'exercise-log' && (
                                    <div>
                                        <div className="p-4 bg-orange-50 rounded-lg mb-4">
                                            <h4 className="font-bold mb-2">오늘의 운동</h4>
                                            <div className="flex justify-between items-center">
                                                <span className="text-2xl font-bold">632 kcal</span>
                                                <span className="text-sm text-gray-600">소모됨</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-bold">조깅</span>
                                                    <span className="text-orange-600 font-bold">352 kcal</span>
                                                </div>
                                                <p className="text-sm text-gray-600">30분 | 오전 7:00</p>
                                            </div>
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-bold">근력 운동</span>
                                                    <span className="text-orange-600 font-bold">280 kcal</span>
                                                </div>
                                                <p className="text-sm text-gray-600">45분 | 오후 6:30</p>
                                            </div>
                                            <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-500 hover:text-orange-600">+ 운동 추가</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeMenu === 'health-goals' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">건강 목표</h3>
                                <div className="flex space-x-2 mb-6 border-b">
                                    <button onClick={() => setActiveSubMenu('goals')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'goals' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>목표 설정</button>
                                    <button onClick={() => setActiveSubMenu('progress')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'progress' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>진행 상황</button>
                                    <button onClick={() => setActiveSubMenu('history')} className={`px-4 py-2 font-semibold ${activeSubMenu === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>달성 이력</button>
                                </div>

                                {activeSubMenu === 'goals' && (
                                    <div className="space-y-4">
                                        <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-900 mb-2">체중 감량 목표</h4>
                                                    <p className="text-sm text-gray-600">현재: 70kg → 목표: 65kg</p>
                                                    <p className="text-xs text-gray-500 mt-1">기간: 2025.12.01 ~ 2026.03.01</p>
                                                </div>
                                                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">진행중</span>
                                            </div>
                                            <button className="text-blue-600 text-sm font-semibold">수정</button>
                                        </div>
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">혈압 관리</h4>
                                            <p className="text-sm text-gray-600">목표: 수축기 120mmHg 이하 유지</p>
                                            <p className="text-xs text-gray-500 mt-1">기간: 지속적</p>
                                        </div>
                                        <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition font-semibold">+ 새 목표 추가</button>
                                    </div>
                                )}

                                {activeSubMenu === 'progress' && (
                                    <div className="space-y-6">
                                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                                            <h4 className="font-bold text-gray-900 mb-4">체중 감량 진행도</h4>
                                            <div className="mb-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>70kg</span>
                                                    <span className="font-bold text-blue-600">68kg (현재)</span>
                                                    <span>65kg</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-4">
                                                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '40%' }}></div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700">2kg 감량 성공! 목표까지 3kg 남았습니다.</p>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="p-4 bg-white border rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">주간 평균 운동</p>
                                                <p className="text-2xl font-bold text-gray-900">4회</p>
                                            </div>
                                            <div className="p-4 bg-white border rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">일일 칼로리</p>
                                                <p className="text-2xl font-bold text-gray-900">1,850</p>
                                            </div>
                                            <div className="p-4 bg-white border rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">목표 달성률</p>
                                                <p className="text-2xl font-bold text-gray-900">40%</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeSubMenu === 'history' && (
                                    <div className="space-y-3">
                                        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-gray-900">10,000보 걷기 달성</h4>
                                                <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded">완료</span>
                                            </div>
                                            <p className="text-sm text-gray-600">30일 연속 달성</p>
                                            <p className="text-xs text-gray-500 mt-1">2025.11.01 ~ 2025.11.30</p>
                                        </div>
                                        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-gray-900">금연 3개월</h4>
                                                <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-bold rounded">완료</span>
                                            </div>
                                            <p className="text-sm text-gray-600">금연 목표 달성</p>
                                            <p className="text-xs text-gray-500 mt-1">2025.08.01 ~ 2025.11.01</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeMenu === 'health-records' && (
                        <div>
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 mb-6 text-white shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <Activity className="w-16 h-16" />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2">오늘의 건강 점수</h3>
                                            <p className="text-emerald-100">2025년 12월 8일 기준</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-6xl font-bold">85</div>
                                        <p className="text-emerald-100 mt-2">/ 100점</p>
                                        <span className="px-4 py-2 bg-white text-emerald-700 rounded-full text-sm font-bold mt-2 inline-block">양호</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                                        <p className="text-emerald-100 text-sm mb-1">수면</p>
                                        <p className="text-2xl font-bold">7.5시간</p>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                                        <p className="text-emerald-100 text-sm mb-1">운동</p>
                                        <p className="text-2xl font-bold">8,245보</p>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                                        <p className="text-emerald-100 text-sm mb-1">스트레스</p>
                                        <p className="text-2xl font-bold">낮음</p>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                                        <p className="text-emerald-100 text-sm mb-1">혈당</p>
                                        <p className="text-2xl font-bold">정상</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <User className="w-5 h-5 mr-2 text-blue-600" />
                                        기본 신체 정보
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-gray-600 mb-1">신장</p>
                                            <p className="text-2xl font-bold text-gray-900">175cm</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-gray-600 mb-1">체중</p>
                                            <p className="text-2xl font-bold text-gray-900">70kg</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-gray-600 mb-1">BMI</p>
                                            <p className="text-2xl font-bold text-gray-900">22.9</p>
                                            <p className="text-xs text-blue-600 mt-1">정상</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-sm text-gray-600 mb-1">혈액형</p>
                                            <p className="text-2xl font-bold text-gray-900">A+</p>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                                        정보 수정
                                    </button>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-emerald-600" />
                                        스마트워치 연동
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="font-bold text-gray-900">평균 심박수</p>
                                                <Heart className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900">72 bpm</p>
                                            <p className="text-xs text-gray-500 mt-1">최근 24시간 평균</p>
                                        </div>
                                        <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="font-bold text-gray-900">혈압</p>
                                                <Activity className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900">120/80</p>
                                            <p className="text-xs text-gray-500 mt-1">정상 범위</p>
                                        </div>
                                        <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="font-bold text-gray-900">혈중 산소</p>
                                                <Activity className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900">98%</p>
                                            <p className="text-xs text-gray-500 mt-1">정상</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                                        수면 기록
                                    </h4>
                                    <div className="text-center mb-4">
                                        <p className="text-4xl font-bold text-gray-900">7.5시간</p>
                                        <p className="text-sm text-gray-600 mt-1">어젯밤 수면 시간</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">깊은 수면</span>
                                            <span className="font-bold text-indigo-600">2.3시간</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">얕은 수면</span>
                                            <span className="font-bold text-indigo-600">4.2시간</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">REM 수면</span>
                                            <span className="font-bold text-indigo-600">1.0시간</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                                        <p className="text-sm text-indigo-900 font-semibold">수면 품질: 양호</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-amber-600" />
                                        스트레스 지수
                                    </h4>
                                    <div className="text-center mb-4">
                                        <p className="text-4xl font-bold text-gray-900">28</p>
                                        <p className="text-sm text-gray-600 mt-1">현재 스트레스 레벨</p>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>낮음</span>
                                            <span>높음</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-amber-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">오늘 평균</span>
                                            <span className="font-bold text-amber-600">32</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">주간 평균</span>
                                            <span className="font-bold text-amber-600">35</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                                        <p className="text-sm text-amber-900 font-semibold">상태: 낮음 (양호)</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-pink-600" />
                                        혈당 수치
                                    </h4>
                                    <div className="text-center mb-4">
                                        <p className="text-4xl font-bold text-gray-900">95</p>
                                        <p className="text-sm text-gray-600 mt-1">mg/dL (공복 시)</p>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">아침 식전</span>
                                            <span className="font-bold text-pink-600">95</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">식후 2시간</span>
                                            <span className="font-bold text-pink-600">128</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">주간 평균</span>
                                            <span className="font-bold text-pink-600">102</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-pink-50 rounded-lg">
                                        <p className="text-sm text-pink-900 font-semibold">정상 범위 유지중</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-orange-600" />
                                        운동 기록
                                    </h4>
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-gray-600">오늘 걸음 수</p>
                                            <p className="text-2xl font-bold text-gray-900">8,245</p>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-orange-500 h-3 rounded-full" style={{ width: '82%' }}></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">목표: 10,000보</p>
                                    </div>
                                    <div className="space-y-3 mb-4">
                                        <div className="p-3 bg-orange-50 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm font-semibold text-gray-900">조깅</p>
                                                <span className="text-xs text-orange-600 font-bold">30분</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">오전 7:00 - 352 kcal</p>
                                        </div>
                                        <div className="p-3 bg-orange-50 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm font-semibold text-gray-900">근력 운동</p>
                                                <span className="text-xs text-orange-600 font-bold">45분</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">오후 6:30 - 280 kcal</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-semibold">
                                        운동 기록 추가
                                    </button>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-teal-600" />
                                        식단 기록
                                    </h4>
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-gray-600">오늘 섭취 칼로리</p>
                                            <p className="text-2xl font-bold text-gray-900">1,850</p>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">목표: 2,000 kcal</p>
                                    </div>
                                    <div className="space-y-3 mb-4">
                                        <div className="p-3 bg-teal-50 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm font-semibold text-gray-900">아침</p>
                                                <span className="text-xs text-teal-600 font-bold">450 kcal</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">토스트, 계란, 우유</p>
                                        </div>
                                        <div className="p-3 bg-teal-50 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm font-semibold text-gray-900">점심</p>
                                                <span className="text-xs text-teal-600 font-bold">750 kcal</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">비빔밥, 된장찌개</p>
                                        </div>
                                        <div className="p-3 bg-teal-50 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm font-semibold text-gray-900">저녁</p>
                                                <span className="text-xs text-teal-600 font-bold">650 kcal</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">연어 구이, 샐러드</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold">
                                        식단 기록 추가
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'medical-info' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">의료 정보</h3>

                                <div className="grid grid-cols-3 gap-6 mb-6">
                                    <button className="p-6 border-2 border-blue-500 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                                        <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                                        <p className="font-bold text-gray-900">진료 기록</p>
                                        <p className="text-sm text-gray-600 mt-2">총 12건</p>
                                    </button>
                                    <button className="p-6 border-2 border-pink-500 bg-pink-50 rounded-xl hover:bg-pink-100 transition">
                                        <Pill className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                                        <p className="font-bold text-gray-900">복용 약물</p>
                                        <p className="text-sm text-gray-600 mt-2">현재 3개</p>
                                    </button>
                                    <button className="p-6 border-2 border-indigo-500 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition">
                                        <Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                                        <p className="font-bold text-gray-900">예약 내역</p>
                                        <p className="text-sm text-gray-600 mt-2">예정 3건</p>
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <FileText className="w-5 h-5 mr-2 text-blue-600" />
                                            최근 진료 기록
                                        </h4>
                                        <div className="space-y-3 flex-1">
                                            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">진료기록</p>
                                                        <p className="text-sm text-gray-600">김성민 교수 (내과)</p>
                                                    </div>
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">완료</span>
                                                </div>
                                                <p className="text-xs text-gray-500">2025.11.30</p>
                                                <button className="mt-2 text-blue-600 text-sm font-semibold hover:text-blue-700">상세보기</button>
                                            </div>
                                            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">검사결과</p>
                                                        <p className="text-sm text-gray-600">박민수 교수 (정형외과)</p>
                                                    </div>
                                                    <span className="px-2 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded">NEW</span>
                                                </div>
                                                <p className="text-xs text-gray-500">2025.11.28</p>
                                                <button className="mt-2 text-blue-600 text-sm font-semibold hover:text-blue-700">상세보기</button>
                                            </div>
                                            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">처방전</p>
                                                        <p className="text-sm text-gray-600">이지은 교수 (안과)</p>
                                                    </div>
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">완료</span>
                                                </div>
                                                <p className="text-xs text-gray-500">2025.11.25</p>
                                                <button className="mt-2 text-blue-600 text-sm font-semibold hover:text-blue-700">상세보기</button>
                                            </div>
                                        </div>
                                        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                                            전체 진료기록 보기
                                        </button>
                                    </div>

                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <Pill className="w-5 h-5 mr-2 text-pink-600" />
                                            복용중인 약물
                                        </h4>
                                        <div className="space-y-3 flex-1">
                                            <div className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded-lg">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">아스피린 100mg</p>
                                                        <p className="text-sm text-gray-600">1일 1회, 아침 식후</p>
                                                    </div>
                                                    <Pill className="w-5 h-5 text-pink-600" />
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                                        <div className="bg-pink-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-700">15일</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">처방의: 김성민 교수</p>
                                            </div>
                                            <div className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded-lg">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">혈압약 5mg</p>
                                                        <p className="text-sm text-gray-600">1일 1회, 저녁 식후</p>
                                                    </div>
                                                    <Pill className="w-5 h-5 text-pink-600" />
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                                        <div className="bg-pink-600 h-2 rounded-full" style={{ width: '56%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-700">28일</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">처방의: 김성민 교수</p>
                                            </div>
                                            <div className="p-4 border-l-4 border-pink-500 bg-pink-50 rounded-lg">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-bold text-gray-900">비타민D 1000IU</p>
                                                        <p className="text-sm text-gray-600">1일 1회, 아침 식후</p>
                                                    </div>
                                                    <Pill className="w-5 h-5 text-pink-600" />
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                                        <div className="bg-pink-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-700">45일</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">처방의: 김성민 교수</p>
                                            </div>
                                        </div>
                                        <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-semibold">
                                            복용 기록 추가
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                        <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                                        예정된 예약
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-lg">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h5 className="font-bold text-gray-900">김성민 교수</h5>
                                                        <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">내과</span>
                                                    </div>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            2025.12.10 (화)
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="w-4 h-4 mr-1" />
                                                            14:00
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="w-4 h-4 mr-1" />
                                                            3층 301호
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-semibold">
                                                        변경
                                                    </button>
                                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-semibold">
                                                        취소
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-lg">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h5 className="font-bold text-gray-900">이지은 교수</h5>
                                                        <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">안과</span>
                                                    </div>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            2025.12.15 (일)
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="w-4 h-4 mr-1" />
                                                            10:30
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="w-4 h-4 mr-1" />
                                                            2층 205호
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-semibold">
                                                        변경
                                                    </button>
                                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-semibold">
                                                        취소
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-lg">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h5 className="font-bold text-gray-900">박민수 교수</h5>
                                                        <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">정형외과</span>
                                                    </div>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            2025.12.20 (금)
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="w-4 h-4 mr-1" />
                                                            15:30
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="w-4 h-4 mr-1" />
                                                            4층 402호
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-semibold">
                                                        변경
                                                    </button>
                                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-semibold">
                                                        취소
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
                                        새 예약 추가하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'login' && (
                        <div className="flex items-center justify-center min-h-96">
                            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                                <div className="text-center mb-8">
                                    <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">메디케어 포털 로그인</h3>
                                    <p className="text-gray-600">환자 포털에 로그인하세요</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">환자번호 또는 아이디</label>
                                        <input
                                            type="text"
                                            placeholder="P-2024-1234"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호</label>
                                        <input
                                            type="password"
                                            placeholder="비밀번호를 입력하세요"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-gray-600">로그인 상태 유지</span>
                                        </label>
                                        <button className="text-blue-600 hover:text-blue-700 font-semibold">
                                            비밀번호 찾기
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setIsLoggedIn(true);
                                            setActiveMenu('home');
                                        }}
                                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                                    >
                                        로그인
                                    </button>

                                    <div className="text-center pt-4 border-t">
                                        <p className="text-sm text-gray-600">
                                            계정이 없으신가요?
                                            <button className="text-blue-600 hover:text-blue-700 font-semibold ml-2">
                                                회원가입
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'mypage' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">마이페이지</h3>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-1 border-r pr-6">
                                        <div className="text-center mb-6">
                                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <User className="w-12 h-12 text-blue-600" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">홍길동</h4>
                                            <p className="text-sm text-gray-600">환자번호: P-2024-1234</p>
                                        </div>

                                        <div className="space-y-2">
                                            <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold">
                                                개인정보
                                            </button>
                                            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
                                                비밀번호 변경
                                            </button>
                                            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700">
                                                알림 설정
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsLoggedIn(false);
                                                    setActiveMenu('login');
                                                }}
                                                className="w-full text-left px-4 py-3 hover:bg-red-50 rounded-lg text-red-600"
                                            >
                                                로그아웃
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6">개인정보</h4>

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">이름</label>
                                                    <input
                                                        type="text"
                                                        value="홍길동"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                                        readOnly
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">생년월일</label>
                                                    <input
                                                        type="text"
                                                        value="1985.03.15"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">휴대폰 번호</label>
                                                    <input
                                                        type="text"
                                                        value="010-1234-5678"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
                                                    <input
                                                        type="email"
                                                        value="hong@example.com"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">주소</label>
                                                <input
                                                    type="text"
                                                    value="서울시 강남구 테헤란로 123"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">비상연락처</label>
                                                <input
                                                    type="text"
                                                    value="010-9876-5432"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            <div className="pt-4">
                                                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                                                    정보 수정
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-8 border-t">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">건강 정보</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-gray-50 rounded-lg">
                                                    <p className="text-sm text-gray-600 mb-1">혈액형</p>
                                                    <p className="text-lg font-bold text-gray-900">A+</p>
                                                </div>
                                                <div className="p-4 bg-gray-50 rounded-lg">
                                                    <p className="text-sm text-gray-600 mb-1">신장 / 체중</p>
                                                    <p className="text-lg font-bold text-gray-900">175cm / 70kg</p>
                                                </div>
                                                <div className="p-4 bg-gray-50 rounded-lg">
                                                    <p className="text-sm text-gray-600 mb-1">알레르기</p>
                                                    <p className="text-lg font-bold text-gray-900">페니실린</p>
                                                </div>
                                                <div className="p-4 bg-gray-50 rounded-lg">
                                                    <p className="text-sm text-gray-600 mb-1">만성질환</p>
                                                    <p className="text-lg font-bold text-gray-900">고혈압</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'calendar' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">캘린더</h3>
                                    <div className="flex items-center space-x-4">
                                        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition">
                                            <ChevronRight className="w-5 h-5 rotate-180" />
                                        </button>
                                        <span className="text-lg font-semibold text-gray-900">
                                            {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
                                        </span>
                                        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                    {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                                        <div key={day} className="text-center font-semibold text-gray-600 py-2">
                                            {day}
                                        </div>
                                    ))}

                                    {(() => {
                                        const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
                                        const days = [];

                                        for (let i = 0; i < firstDay; i++) {
                                            days.push(<div key={`empty-${i}`} className="p-2"></div>);
                                        }

                                        for (let day = 1; day <= daysInMonth; day++) {
                                            const events = getEventForDay(day);
                                            const isToday = day === 7 && currentMonth.getMonth() === 11;

                                            days.push(
                                                <div
                                                    key={day}
                                                    className={`min-h-24 p-2 border rounded-lg transition cursor-pointer ${isToday
                                                            ? 'bg-blue-50 border-blue-500'
                                                            : 'border-gray-200 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <div className={`text-sm font-bold mb-1 flex items-center space-x-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                                                        <span>{day}</span>
                                                        {isToday && <span className="text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">오늘</span>}
                                                    </div>
                                                    <div className="space-y-1">
                                                        {events.map((event, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`text-xs p-1 rounded border-l-2 ${event.type === 'appointment'
                                                                        ? 'bg-blue-100 border-blue-600 text-blue-900'
                                                                        : 'bg-pink-100 border-pink-600 text-pink-900'
                                                                    }`}
                                                            >
                                                                <div className="flex items-center space-x-1">
                                                                    {event.type === 'appointment' ? (
                                                                        <Calendar className="w-3 h-3" />
                                                                    ) : (
                                                                        <Pill className="w-3 h-3" />
                                                                    )}
                                                                    <div className="font-bold truncate">{event.title}</div>
                                                                </div>
                                                                <div className="text-xs ml-4">{event.time}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return days;
                                    })()}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">다가오는 일정</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">김성민 교수 진료</p>
                                                <p className="text-sm text-gray-600">2025.12.10 14:00</p>
                                                <p className="text-xs text-gray-500">내과 - 3층 301호</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">이지은 교수 진료</p>
                                                <p className="text-sm text-gray-600">2025.12.15 10:30</p>
                                                <p className="text-xs text-gray-500">안과 - 2층 205호</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">박민수 교수 진료</p>
                                                <p className="text-sm text-gray-600">2025.12.20 15:30</p>
                                                <p className="text-xs text-gray-500">정형외과 - 4층 402호</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">약 복용 알림</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                                            <Pill className="w-5 h-5 text-purple-600 mt-1" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">아스피린</p>
                                                <p className="text-sm text-gray-600">매일 아침 식후</p>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                                    </div>
                                                    <span className="text-xs text-gray-600">15일 남음</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                                            <Pill className="w-5 h-5 text-purple-600 mt-1" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">혈압약</p>
                                                <p className="text-sm text-gray-600">매일 저녁 식후</p>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '56%' }}></div>
                                                    </div>
                                                    <span className="text-xs text-gray-600">28일 남음</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                                            <Pill className="w-5 h-5 text-purple-600 mt-1" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">비타민D</p>
                                                <p className="text-sm text-gray-600">매일 아침 식후</p>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                                    </div>
                                                    <span className="text-xs text-gray-600">45일 남음</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Bell className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">알림 설정</h4>
                                        <p className="text-gray-700 mb-3">
                                            예약일과 약 복용 시간에 알림을 받으실 수 있습니다.
                                            설정 메뉴에서 알림 시간을 조정하세요.
                                        </p>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                                            알림 설정하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'qa' && (
                        <div>
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">QA 게시판</h3>
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">질문 작성</button>
                                </div>

                                <div className="mb-4">
                                    <input type="text" placeholder="질문 검색..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>

                                <div className="space-y-4">
                                    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FileText className="w-5 h-5 text-gray-700" />
                                                    <h4 className="text-lg font-bold text-gray-900">혈압약 복용 시간 관련 질문입니다</h4>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">✓ 답변완료</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">혈압약을 아침에 먹어야 하나요, 저녁에 먹어야 하나요? 식전 식후도 중요한가요?</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>작성자: 홍길동</span>
                                                    <span>작성일: 2025.12.05</span>
                                                    <span className="font-bold">답변: 1</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    의
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <User className="w-4 h-4 text-gray-700" />
                                                        <p className="font-bold text-gray-900">김성민 교수</p>
                                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">전문의</span>
                                                        <span className="text-xs text-gray-500">내과</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        혈압약은 일반적으로 아침 식후에 복용하는 것이 좋습니다. 혈압은 보통 오전에 높아지는 경향이 있어서
                                                        아침에 복용하면 하루 중 혈압 조절에 효과적입니다. 다만 개인의 상태에 따라 다를 수 있으니
                                                        정기 검진 시 상담해주시기 바랍니다.
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-2">답변일: 2025.12.05 15:30</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FileText className="w-5 h-5 text-gray-700" />
                                                    <h4 className="text-lg font-bold text-gray-900">MRI 검사 전 주의사항이 궁금합니다</h4>
                                                    <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">⏱ 답변대기</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">다음주에 MRI 검사가 예정되어 있는데, 검사 전에 특별히 준비해야 할 사항이 있나요?</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>작성자: 이영희</span>
                                                    <span>작성일: 2025.12.07</span>
                                                    <span className="font-bold">답변: 0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FileText className="w-5 h-5 text-gray-700" />
                                                    <h4 className="text-lg font-bold text-gray-900">당뇨 환자 식단 관리 조언 부탁드립니다</h4>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">✓ 답변완료</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">최근 당뇨 진단을 받았는데, 일상 식단에서 어떤 음식을 피해야 하고 어떤 음식을 섭취하면 좋을까요?</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>작성자: 박민수</span>
                                                    <span>작성일: 2025.12.03</span>
                                                    <span className="font-bold">답변: 1</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    의
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <User className="w-4 h-4 text-gray-700" />
                                                        <p className="font-bold text-gray-900">이지은 교수</p>
                                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">전문의</span>
                                                        <span className="text-xs text-gray-500">내분비내과</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        당뇨 관리를 위해서는 정제 탄수화물(흰쌀, 흰빵)보다는 통곡물을 선택하시고,
                                                        채소와 단백질 위주의 식단을 유지하세요. 과일은 혈당 지수가 낮은 것(베리류, 사과)을 적당량 드시고,
                                                        가공식품과 단 음료는 피하시는 것이 좋습니다. 영양사 상담도 도움이 될 것입니다.
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-2">답변일: 2025.12.04 10:20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FileText className="w-5 h-5 text-gray-700" />
                                                    <h4 className="text-lg font-bold text-gray-900">감기약과 다른 약 같이 복용해도 되나요?</h4>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold">✓ 답변완료</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">현재 혈압약을 복용 중인데 감기에 걸렸습니다. 감기약을 같이 먹어도 괜찮을까요?</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>작성자: 최영수</span>
                                                    <span>작성일: 2025.12.02</span>
                                                    <span className="font-bold">답변: 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">1</button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">2</button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">3</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'messages' && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">메시지</h3>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-1 border-r pr-4">
                                    <input type="text" placeholder="메시지 검색..." className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <div className="space-y-2">
                                        <div className="p-4 rounded-lg cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <p className="font-semibold text-gray-900">김성민 교수</p>
                                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            </div>
                                            <p className="text-sm text-gray-600 truncate mb-1">검사 결과가 정상입니다...</p>
                                            <p className="text-xs text-gray-500">2시간 전</p>
                                        </div>
                                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <p className="font-semibold text-gray-900 mb-2">병원 행정실</p>
                                            <p className="text-sm text-gray-600 truncate mb-1">다음주 예약 일정을...</p>
                                            <p className="text-xs text-gray-500">1일 전</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <div className="border-b pb-4 mb-4">
                                        <h4 className="text-xl font-bold text-gray-900">김성민 교수</h4>
                                        <p className="text-sm text-gray-600">내과</p>
                                    </div>

                                    <div className="space-y-4 mb-6 h-96 overflow-y-auto">
                                        <div className="flex justify-start">
                                            <div className="bg-gray-100 rounded-lg p-4 max-w-lg">
                                                <p className="text-gray-800">안녕하세요, 홍길동 환자님. 지난 주에 받으신 혈액 검사 결과가 나왔습니다.</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="bg-blue-500 text-white rounded-lg p-4 max-w-lg">
                                                <p>감사합니다, 교수님. 다음 예약은 언제 잡으면 될까요?</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4 flex space-x-2">
                                        <input type="text" placeholder="메시지를 입력하세요..." className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">전송</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'home' && (
                        <div>
                            <div className="grid grid-cols-4 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Calendar className="w-12 h-12 opacity-80" />
                                        <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-bold">진료</span>
                                    </div>
                                    <p className="text-3xl font-bold mb-1">3</p>
                                    <p className="text-blue-100">예정된 진료</p>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <FileText className="w-12 h-12 opacity-80" />
                                        <span className="px-3 py-1 bg-white text-indigo-700 rounded-full text-sm font-bold">신규</span>
                                    </div>
                                    <p className="text-3xl font-bold mb-1">1</p>
                                    <p className="text-indigo-100">새 검사결과</p>
                                </div>
                                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Pill className="w-12 h-12 opacity-80" />
                                        <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-bold">처방</span>
                                    </div>
                                    <p className="text-3xl font-bold mb-1">3</p>
                                    <p className="text-pink-100">복용중인 약</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <MessageSquare className="w-12 h-12 opacity-80" />
                                        <span className="px-3 py-1 bg-white text-amber-700 rounded-full text-sm font-bold">메시지</span>
                                    </div>
                                    <p className="text-3xl font-bold mb-1">1</p>
                                    <p className="text-amber-100">새 메시지</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div className="col-span-2 bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">예정된 진료</h3>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-5">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">김성민 교수 - 내과</h4>
                                            <div className="flex items-center space-x-6 text-gray-600 text-sm">
                                                <span>2025.12.10</span>
                                                <span>14:00</span>
                                                <span>3층 301호</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">새 예약 추가하기</button>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">최근 메시지</h3>
                                    <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500 mb-4">
                                        <p className="font-semibold text-gray-900">김성민 교수</p>
                                        <p className="text-sm text-gray-600 mt-2">검사 결과가 정상입니다.</p>
                                    </div>
                                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">메시지 보내기</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-2 bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">최근 진료 기록</h3>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 px-4 text-gray-600">유형</th>
                                                <th className="text-left py-3 px-4 text-gray-600">날짜</th>
                                                <th className="text-left py-3 px-4 text-gray-600">담당의</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="py-4 px-4">진료기록</td>
                                                <td className="py-4 px-4">2025.11.30</td>
                                                <td className="py-4 px-4">김성민 교수</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">복용 약물</h3>
                                    <div className="border rounded-lg p-4 mb-4">
                                        <h4 className="font-bold text-gray-900">아스피린</h4>
                                        <p className="text-sm text-gray-600">1일 1회 - 아침 식후</p>
                                        <p className="text-xs text-gray-500 mt-2">잔여: 15일</p>
                                    </div>
                                    <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold">복용 기록 추가</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}