// DOM Elements
        const mainPage = document.getElementById('mainPage');
        const moodDetailPage = document.getElementById('moodDetailPage');
        const morningJournalPage = document.getElementById('morningJournalPage');
        const eveningJournalPage = document.getElementById('eveningJournalPage');
        const questionPage = document.getElementById('questionPage');
        const positiveMomentPage = document.getElementById('positiveMomentPage');
        const negativeSituationPage = document.getElementById('negativeSituationPage');
        
        const moodOptions = document.querySelectorAll('.mood-option');
        const selectedMoodIcon = document.getElementById('selectedMoodIcon');
        const selectedMoodLabel = document.getElementById('selectedMoodLabel');
        
        const backToMain = document.getElementById('backToMain');
        const backToMainFromMorning = document.getElementById('backToMainFromMorning');
        const backToMainFromEvening = document.getElementById('backToMainFromEvening');
        const backToMainFromQuestion = document.getElementById('backToMainFromQuestion');
        const backToMainFromPositive = document.getElementById('backToMainFromPositive');
        const backToMainFromNegative = document.getElementById('backToMainFromNegative');
        
        const morningJournalBtn = document.getElementById('morningJournal');
        const eveningJournalBtn = document.getElementById('eveningJournal');
        const questionBtn = document.querySelector('.question-button');
        const positiveMomentsBtn = document.getElementById('positiveMoments');
        const negativeSituationsBtn = document.getElementById('negativeSituations');
        
        const dailyQuestionElement = document.getElementById('dailyQuestion');
        const questionTextElement = document.getElementById('questionText');
        const refreshButton = document.querySelector('.refresh-icon');
        
        // Questions array
        const questions = [
            "Что для меня значит любовь? Как я могу дарить и принимать больше любви?",
            "Какие мои достижения я особенно ценю сегодня?",
            "Что меня радует в моей жизни прямо сейчас?",
            "Какие качества во мне я особенно люблю?",
            "Что я могу сделать сегодня, чтобы быть благодарным?",
            "Как я могу проявить заботу о себе сегодня?",
            "Что меня вдохновляет в моей жизни?",
            "Какие маленькие радости я замечаю сегодня?",
            "Что я могу изменить в своей жизни, чтобы стать счастливее?",
            "Какие уроки я извлек из недавних трудностей?"
        ];
        
        // Set up mood selection
        moodOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                moodOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Update selected mood icon and label
                const mood = option.getAttribute('data-mood');
                const moodColor = option.querySelector('.mood-icon').style.backgroundColor;
                const moodIcon = option.querySelector('img').outerHTML;
                
                selectedMoodIcon.style.backgroundColor = moodColor;
                selectedMoodIcon.innerHTML = moodIcon;
                selectedMoodLabel.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
                
                // Show mood detail page
                showPage(moodDetailPage);
            });
        });
        
        // Set up navigation
        morningJournalBtn.addEventListener('click', () => {
            showPage(morningJournalPage);
        });
        
        eveningJournalBtn.addEventListener('click', () => {
            showPage(eveningJournalPage);
        });
        
        questionBtn.addEventListener('click', () => {
            showPage(questionPage);
        });
        
        positiveMomentsBtn.addEventListener('click', () => {
            showPage(positiveMomentPage);
        });
        
        negativeSituationsBtn.addEventListener('click', () => {
            showPage(negativeSituationPage);
        });
        
        // Back buttons
        backToMain.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        backToMainFromMorning.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        backToMainFromEvening.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        backToMainFromQuestion.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        backToMainFromPositive.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        backToMainFromNegative.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(mainPage);
        });
        
        // Refresh button for question of the day
        refreshButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * questions.length);
            const newQuestion = questions[randomIndex];
            dailyQuestionElement.textContent = newQuestion;
            questionTextElement.textContent = newQuestion;
            alert('Вопрос дня обновлен!');
        });
        
        // Function to show a specific page
        function showPage(page) {
            // Hide all pages
            mainPage.classList.add('hidden');
            moodDetailPage.classList.add('hidden');
            morningJournalPage.classList.add('hidden');
            eveningJournalPage.classList.add('hidden');
            questionPage.classList.add('hidden');
            positiveMomentPage.classList.add('hidden');
            negativeSituationPage.classList.add('hidden');
            
            // Show the requested page
            page.classList.remove('hidden');
        }
        
        // Initialize app with main page visible
        window.addEventListener('DOMContentLoaded', () => {
            showPage(mainPage);
        });
        
        // Make sliders interactive
        const energySlider = document.querySelector('.slider:nth-of-type(1)');
        const stressSlider = document.querySelector('.slider:nth-of-type(2)');
        
        if (energySlider) {
            const energyThumb = energySlider.querySelector('.slider-thumb');
            const energyTrack = energySlider.querySelector('.slider-track');
            
            energyThumb.addEventListener('mousedown', (e) => {
                const startX = e.clientX;
                const startLeft = parseInt(window.getComputedStyle(energyThumb).left);
                
                const moveHandler = (e) => {
                    const deltaX = e.clientX - startX;
                    let newLeft = startLeft + deltaX;
                    
                    // Constrain slider within bounds
                    if (newLeft < 0) newLeft = 0;
                    if (newLeft > energySlider.offsetWidth - energyThumb.offsetWidth) {
                        newLeft = energySlider.offsetWidth - energyThumb.offsetWidth;
                    }
                    
                    energyThumb.style.left = newLeft + 'px';
                    energyTrack.style.width = newLeft + 'px';
                };
                
                const upHandler = () => {
                    document.removeEventListener('mousemove', moveHandler);
                    document.removeEventListener('mouseup', upHandler);
                };
                
                document.addEventListener('mousemove', moveHandler);
                document.addEventListener('mouseup', upHandler);
            });
        }
        
        if (stressSlider) {
            const stressThumb = stressSlider.querySelector('.slider-thumb');
            const stressTrack = stressSlider.querySelector('.slider-track');
            
            stressThumb.addEventListener('mousedown', (e) => {
                const startX = e.clientX;
                const startLeft = parseInt(window.getComputedStyle(stressThumb).left);
                
                const moveHandler = (e) => {
                    const deltaX = e.clientX - startX;
                    let newLeft = startLeft + deltaX;
                    
                    // Constrain slider within bounds
                    if (newLeft < 0) newLeft = 0;
                    if (newLeft > stressSlider.offsetWidth - stressThumb.offsetWidth) {
                        newLeft = stressSlider.offsetWidth - stressThumb.offsetWidth;
                    }
                    
                    stressThumb.style.left = newLeft + 'px';
                    stressTrack.style.width = newLeft + 'px';
                };
                
                const upHandler = () => {
                    document.removeEventListener('mousemove', moveHandler);
                    document.removeEventListener('mouseup', upHandler);
                };
                
                document.addEventListener('mousemove', moveHandler);
                document.addEventListener('mouseup', upHandler);
            });
        }
        
        // Save buttons functionality
        document.querySelectorAll('.save-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Запись сохранена!');
                showPage(mainPage);
            });
        });
        
        document.querySelectorAll('.answer-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Ответ сохранен!');
                showPage(mainPage);
            });
        });
        
        document.querySelectorAll('.positive-moment-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Позитивный момент сохранен!');
                showPage(mainPage);
            });
        });
        
        document.querySelectorAll('.negative-situation-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Негативная ситуация сохранена!');
                showPage(mainPage);
            });
        });
        
        // Add button functionality
        document.querySelectorAll('.add-button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Элемент добавлен!');
            });
        });
        
        // Ensure last calendar day is on the right
        document.addEventListener('DOMContentLoaded', () => {
            const calendarDays = document.querySelectorAll('.calendar-day');
            if (calendarDays.length > 0) {
                // Force last day to be on the right by adjusting CSS
                calendarDays[calendarDays.length - 1].style.marginLeft = 'auto';
            }
        });