// Complete 100 Operating System Questions Data from PDF
        const questions = [
            {
                "id": 1,
                "text": "निम्न में से कौन सा ऑपरेटिंग सिस्टम है?",
                "options": ["Mindows", "Linux", "Oracle", "DOS"],
                "correctAnswer": 1,
                "topic": "Operating System Basics"
            },
            {
                "id": 2,
                "text": "लिनक्स के निर्माता कौन हैं?",
                "options": ["Linux Van Pelt", "Linux Torvalds", "Linux Pauling", "None"],
                "correctAnswer": 1,
                "topic": "Linux"
            },
            {
                "id": 3,
                "text": "DSM का पूरा नाम क्या है?",
                "options": ["Demoralized System Memory", "Distributed Shared Memory", "Direct System Module", "Direct System Memory"],
                "correctAnswer": 1,
                "topic": "Operating System Concepts"
            },
            {
                "id": 4,
                "text": "निम्न में से कौन सा सॉफ्टवेयर है?",
                "options": ["Jupyter", "System Application", "Application Software", "Software"],
                "correctAnswer": 2,
                "topic": "Software Types"
            },
            {
                "id": 5,
                "text": "DOS में फाइल नाम की लंबाई कितनी होती है?",
                "options": ["5", "8", "6", "4"],
                "correctAnswer": 1,
                "topic": "DOS"
            },
            {
                "id": 6,
                "text": "कमांड इंटरप्रेटर को और किस नाम से जाना जाता है?",
                "options": ["Prompt", "System Application", "Script", "Shell"],
                "correctAnswer": 3,
                "topic": "Command Line"
            },
            {
                "id": 7,
                "text": "निम्न में से कंप्यूटर के पूरे संचालन को नियंत्रित करने वाला प्रोग्राम कौनसा है?",
                "options": ["Operating System", "Working System", "Controlling System", "Peripheral System"],
                "correctAnswer": 0,
                "topic": "Operating System Basics"
            },
            {
                "id": 8,
                "text": "विंडोज एक ऑपरेटिंग सिस्टम है?",
                "options": ["True", "False"],
                "correctAnswer": 0,
                "topic": "Windows"
            },
            {
                "id": 9,
                "text": "Window Operating System का आरंभ कब हुआ था?",
                "options": ["20 November 1980", "25 November 1995", "20 November 1985", "None"],
                "correctAnswer": 2,
                "topic": "Windows"
            },
            {
                "id": 10,
                "text": "डेस्कटॉप पर समय और तारीख कहाँ दिखाई देता है?",
                "options": ["My Computer", "Desktop", "Taskbar", "Status Bar"],
                "correctAnswer": 2,
                "topic": "Windows Interface"
            },
            {
                "id": 11,
                "text": "आजकल सबसे लोकप्रिय कंप्यूटर ऑपरेटिंग सिस्टम कौन सा है?",
                "options": ["Linux", "Microsoft Windows", "Macintosh", "UNIX"],
                "correctAnswer": 1,
                "topic": "Operating System Popularity"
            },
            {
                "id": 12,
                "text": "लिनक्स किस प्रकार का ऑपरेटिंग सिस्टम है?",
                "options": ["Multiuser, Single Tasking", "Multiuser, Multi-Tasking", "Single user, Multi-Tasking", "None"],
                "correctAnswer": 1,
                "topic": "Linux"
            },
            {
                "id": 13,
                "text": "BIOS का प्रयोग किसके लिए किया जाता है?",
                "options": ["Operating system", "Compiler", "Interpreter", "Application software"],
                "correctAnswer": 0,
                "topic": "BIOS"
            },
            {
                "id": 14,
                "text": "kill -9 कमांड क्या करता है?",
                "options": ["Trim", "INT", "Stop", "Kill"],
                "correctAnswer": 3,
                "topic": "Linux Commands"
            },
            {
                "id": 15,
                "text": "Windows 10 में Game Bar खोलने की Shortcut Key क्या है?",
                "options": ["Win+ F2", "Ctrl+ G", "Shift+ G", "Win+ G"],
                "correctAnswer": 3,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 16,
                "text": "Delete की गई फाइलें कहाँ जाती हैं?",
                "options": ["Recycle Bin", "Hard Disk", "Task bar", "RAM"],
                "correctAnswer": 0,
                "topic": "Windows"
            },
            {
                "id": 17,
                "text": "Linux किस प्रकार का सॉफ्टवेयर है?",
                "options": ["Microsoft", "Windows", "Open Source", "None of these"],
                "correctAnswer": 2,
                "topic": "Linux"
            },
            {
                "id": 18,
                "text": "Start Menu खोलने की Shortcut Key क्या है?",
                "options": ["Ctrl + Esc", "Press Window Key", "A and B Both", "None"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 19,
                "text": "UNIX पर आधारित ऑपरेटिंग सिस्टम कौन सा है?",
                "options": ["Mac-OS", "MS DOS", "Fedora", "None"],
                "correctAnswer": 0,
                "topic": "UNIX"
            },
            {
                "id": 20,
                "text": "कौन सा ऑपरेटिंग सिस्टम Single User है?",
                "options": ["Windows", "Mac", "MS-DOS", "None of these"],
                "correctAnswer": 2,
                "topic": "Operating System Types"
            },
            {
                "id": 21,
                "text": "निम्न में से कौन सा एप्लीकेशन सॉफ्टवेयर है?",
                "options": ["Windows 7", "Word", "Photoshop", "Excel"],
                "correctAnswer": 1,
                "topic": "Software Types"
            },
            {
                "id": 22,
                "text": "Windows 10 में डेस्कटॉप बैकग्राउंड बदलने के लिए किस option का use करते हैं?",
                "options": ["Display Setting", "desktop Setting", "Personalized", "None of these"],
                "correctAnswer": 2,
                "topic": "Windows Settings"
            },
            {
                "id": 23,
                "text": "कर्नेल क्या है?",
                "options": ["Graphics interface of the operating system", "Stored on a chip", "An important Part of Linux and UNIX", "All"],
                "correctAnswer": 3,
                "topic": "Kernel"
            },
            {
                "id": 24,
                "text": "डिवाइस ड्राइवर क्या है?",
                "options": ["Hardware", "Software", "Both A and B", "None"],
                "correctAnswer": 1,
                "topic": "Device Drivers"
            },
            {
                "id": 25,
                "text": "ऑपरेटिंग सिस्टम क्या मैनेज करता है?",
                "options": ["Memory", "I/O Devices", "Processor", "All the options"],
                "correctAnswer": 3,
                "topic": "Operating System Functions"
            },
            {
                "id": 26,
                "text": "निम्न में से कौन सा Windows OS है?",
                "options": ["Windows XP", "Windows 2000", "Windows 98", "Windows 95"],
                "correctAnswer": 0,
                "topic": "Windows Versions"
            },
            {
                "id": 27,
                "text": "निम्न में से सबसे नया Windows OS कौन सा है?",
                "options": ["Windows 7", "Windows 8", "Windows 10", "Windows XP"],
                "correctAnswer": 2,
                "topic": "Windows Versions"
            },
            {
                "id": 28,
                "text": "कौन सा ऑपरेटिंग सिस्टम Open Source है?",
                "options": ["Linux", "windows", "DOS", "UNIX"],
                "correctAnswer": 0,
                "topic": "Open Source"
            },
            {
                "id": 29,
                "text": "Linux एक मल्टीटास्किंग ऑपरेटिंग सिस्टम है?",
                "options": ["TRUE", "False"],
                "correctAnswer": 0,
                "topic": "Linux"
            },
            {
                "id": 30,
                "text": "MS Windows ऑपरेटिंग सिस्टम कब प्रस्तावित किए गए थे?",
                "options": ["1980", "1989", "1995", "1985"],
                "correctAnswer": 3,
                "topic": "Windows History"
            },
            {
                "id": 31,
                "text": "निम्न में से कौन नोटपैड का एक्सटेंशन है?",
                "options": [".txt", ".ppt", ".rtf", ".docx"],
                "correctAnswer": 0,
                "topic": "File Extensions"
            },
            {
                "id": 32,
                "text": "FAT का पूरा नाम क्या है?",
                "options": ["File attribute table", "File allocation table", "Font attribute table", "Format allocation table"],
                "correctAnswer": 1,
                "topic": "File Systems"
            },
            {
                "id": 33,
                "text": "ग्राफिक्स को स्टोर करने के लिए मानक बिट मैप वाले प्रारूप के लिए किस एक्सटेंशन का उपयोग किया जाता है?",
                "options": [".wav", ".png", ".bmp", ".xlsx"],
                "correctAnswer": 2,
                "topic": "File Formats"
            },
            {
                "id": 34,
                "text": "निम्नलिखित में से कौन सा कथन UNIX के बारे में गलत है?",
                "options": ["Unix is a Multitasking Operating System", "Unix is an open-source Software", "Unix is a multi-user Operating system", "Unix is a multiprogramming Operating System"],
                "correctAnswer": 1,
                "topic": "UNIX"
            },
            {
                "id": 35,
                "text": "निम्न में से फ्रीवेयर कौन सा है?",
                "options": ["Google", "UNIX", "MS Office", "LibreOffice"],
                "correctAnswer": 3,
                "topic": "Freeware"
            },
            {
                "id": 36,
                "text": "किसी कंप्यूटर का ऑपरेटिंग सिस्टम निम्न कार्य करता है?",
                "options": ["Manage disk and file", "Manages computer memory", "Manages computer resources", "All of the above"],
                "correctAnswer": 3,
                "topic": "Operating System Functions"
            },
            {
                "id": 37,
                "text": "____ एक कंप्यूटर प्रोग्राम या उसके सहायक डेटा को अपडेट करने के लिए डिजाइन किया गया सॉफ्टवेयर का एक टुकड़ा है?",
                "options": ["Patch", "Bug", "Computer program", "none of these"],
                "correctAnswer": 0,
                "topic": "Software Updates"
            },
            {
                "id": 38,
                "text": "विंडोज में खुले हुए प्रोग्राम के बीच अदला बदली के लिए _______ का प्रयोग करते है?",
                "options": ["Shift + Ctrl + Tab", "Alt+ Tab", "Shift+ Tab", "Ctrl+ Tab"],
                "correctAnswer": 1,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 39,
                "text": "कौन सा कमांड लिनक्स में करंट डायरेक्टरी दिखाता है?",
                "options": ["Pwsd", "Pwd", "Wpds", "Pwds"],
                "correctAnswer": 1,
                "topic": "Linux Commands"
            },
            {
                "id": 40,
                "text": "ऑपरेटिंग सिस्टम का प्रयोग_______में होता है?",
                "options": ["ATM Card", "Computer Systems", "Smart Card", "Microwave Oven"],
                "correctAnswer": 1,
                "topic": "Operating System Usage"
            },
            {
                "id": 41,
                "text": "एक ही बार में सभी विंडो को मिनीमाइज करने की शॉर्टकट की क्या है?",
                "options": ["Ctrl+ M", "Win+ M", "Win+ D", "Ctrl + Win + D"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 42,
                "text": "यदि Computer का Date और Time गलत है तो आप किसका उपयोग करके इसे Reset कर सकते हैं?",
                "options": ["Write file", "write", "Control Panel", "Calendar"],
                "correctAnswer": 2,
                "topic": "Windows Settings"
            },
            {
                "id": 43,
                "text": "लिनक्स में एक यूजर डाउनलोड और अपलोड कर सकता है?",
                "options": ["I/O Modules", "I/O Devices", "Kernel Modules", "File Base I/O"],
                "correctAnswer": 1,
                "topic": "Linux"
            },
            {
                "id": 44,
                "text": "प्रत्येक Computer के सभी हिस्सों के ठीक से काम करने और दूसरे सभी प्रकार के प्रोग्राम को चलाने के लिए Computer में क्या होना आवश्यक है?",
                "options": ["Operating System", "Interpreter", "Compiler", "Utility Software"],
                "correctAnswer": 0,
                "topic": "Operating System Importance"
            },
            {
                "id": 45,
                "text": "Windows operating system में shutdown विकल्प पॉप-अप करने की शॉर्टकट की क्या होती है?",
                "options": ["Ctrl+ F4", "Alt+ F4", "Win+ F4", "ctrl+ Shift+ F4"],
                "correctAnswer": 1,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 46,
                "text": "ऑपरेटिंग सिस्टम क्या है?",
                "options": ["हार्डवेयर और एप्लीकेशन प्रोग्राम के बीच इंटरफेस", "प्रोग्राम का संग्रह जो हार्डवेयर संसाधनों का प्रबंधन करता है", "एप्लीकेशन प्रोग्राम के लिए सिस्टम सेवा प्रदाता", "सभी"],
                "correctAnswer": 3,
                "topic": "Operating System Definition"
            },
            {
                "id": 47,
                "text": "टेलीफोन संख्या, जन्मतिथि और ग्राहक का नाम______का उदाहरण है?",
                "options": ["A File", "A Database", "A Record", "Data"],
                "correctAnswer": 2,
                "topic": "Database"
            },
            {
                "id": 48,
                "text": "Windows Operating System में Run Command ओपन करने के लिए किस शॉर्टकट की का इस्तेमाल किया जाता है?",
                "options": ["Ctrl+ R", "Alt+ R", "Win+ R", "Win+ Shift+ R"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 49,
                "text": "बूटस्ट्रैपिंग को और किस नाम से जाना जाता है?",
                "options": ["Cold Booting", "Warm Booting", "Fast Booting", "None"],
                "correctAnswer": 0,
                "topic": "Booting"
            },
            {
                "id": 50,
                "text": "Linux Operating System में फाइल डिलीट करने की कमांड क्या है?",
                "options": ["rm", "mv", "ren", "rm"],
                "correctAnswer": 0,
                "topic": "Linux Commands"
            },
            {
                "id": 51,
                "text": "Windows Operating System में रिफ्रेश की शॉर्टकट की क्या है?",
                "options": ["F1", "F3", "F5", "F2"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 52,
                "text": "GUI का पूरा नाम क्या है?",
                "options": ["Graphical User Interface", "Graphical Utility Interface", "Graphical User Interaction", "General User Interface"],
                "correctAnswer": 0,
                "topic": "GUI"
            },
            {
                "id": 53,
                "text": "ऑपरेटिंग सिस्टम का मुख्य उद्देश्य क्या है?",
                "options": ["To manage resources of the system", "To provide user interface", "To manage files", "To manage network"],
                "correctAnswer": 0,
                "topic": "Operating System Purpose"
            },
            {
                "id": 54,
                "text": "कौन सा ऑपरेटिंग सिस्टम मोबाइल डिवाइस के लिए है?",
                "options": ["Windows", "Android", "Linux", "UNIX"],
                "correctAnswer": 1,
                "topic": "Mobile OS"
            },
            {
                "id": 55,
                "text": "Linux में फाइल डिलीट करने की कमांड क्या है?",
                "options": ["rm", "unlink", "dfile", "dt"],
                "correctAnswer": 0,
                "topic": "Linux Commands"
            },
            {
                "id": 56,
                "text": "Linux में डायरेक्टरी डिलीट करने की कमांड क्या है?",
                "options": ["del", "rd", "dfile", "rmdir"],
                "correctAnswer": 3,
                "topic": "Linux Commands"
            },
            {
                "id": 57,
                "text": "Windows 10 में प्रिंटर रिमूव करने का option क्या है?",
                "options": ["Delete Printer", "Remove Device", "Remove Printer", "Delete Device"],
                "correctAnswer": 2,
                "topic": "Windows Settings"
            },
            {
                "id": 58,
                "text": "बूटिंग क्या है?",
                "options": ["Shutting down the system", "Restarting the system", "Loading the operating system into the main memory of the computer", "Installing new software"],
                "correctAnswer": 2,
                "topic": "Booting"
            },
            {
                "id": 59,
                "text": "ऑपरेटिंग सिस्टम का मुख्य कार्य क्या है?",
                "options": ["Word processing", "Spreadsheet calculations", "Managing hardware resources", "Web browsing"],
                "correctAnswer": 2,
                "topic": "Operating System Functions"
            },
            {
                "id": 60,
                "text": "Control Panel क्या है?",
                "options": ["System settings interface", "File manager", "Task manager", "Device manager"],
                "correctAnswer": 0,
                "topic": "Windows"
            },
            {
                "id": 61,
                "text": "Ubuntu OS में डिफॉल्ट ऑफिस सुइट कौन सा है?",
                "options": ["MS Office", "LibreOffice", "Lotus", "VisiCalc"],
                "correctAnswer": 1,
                "topic": "Ubuntu"
            },
            {
                "id": 62,
                "text": "विंडोज 10 में प्रॉपर्टी के किस टैब को चुनकर प्रिंटर शेयर किया जा सकता है?",
                "options": ["Shared", "Sharing", "General", "Devices"],
                "correctAnswer": 1,
                "topic": "Windows Settings"
            },
            {
                "id": 63,
                "text": "Windows OS में Ctrl + F का क्या इस्तेमाल है?",
                "options": ["कंप्यूटर सर्च करने के लिए", "My Computer ओपन करने के लिए", "फाइल या फोल्डर को सर्च करने के लिए", "मिनीमाइज विंडो को रिस्टोर करने के लिए"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 64,
                "text": "Linux operating system के संस्करण की जांच करने के लिए किस कमांड का उपयोग किया जाता है?",
                "options": ["uname -a", "uname -n", "uname -e", "uname -f"],
                "correctAnswer": 0,
                "topic": "Linux Commands"
            },
            {
                "id": 65,
                "text": "Linux operating system में फाइल बनाने की कमांड क्या है?",
                "options": ["echo", "touch", "cat", "all of the above"],
                "correctAnswer": 3,
                "topic": "Linux Commands"
            },
            {
                "id": 66,
                "text": "सिस्टम के ----------------- होने पर OS स्वतः बूट नहीं होता है?",
                "options": ["Reset", "Power on", "Restart", "Shut down"],
                "correctAnswer": 3,
                "topic": "Booting"
            },
            {
                "id": 67,
                "text": "Unix में किसी फाइल को प्रिंट करने के लिए किस कमांड का उपयोग किया जाता है?",
                "options": ["LPR", "PT", "LP", "a & b both"],
                "correctAnswer": 3,
                "topic": "UNIX Commands"
            },
            {
                "id": 68,
                "text": "Windows में Programs and Features क्या दिखाता है?",
                "options": ["Running applications", "Printer configuration", "Installed applications", "Adding Fonts"],
                "correctAnswer": 2,
                "topic": "Windows Settings"
            },
            {
                "id": 69,
                "text": "Windows 10 में डिफॉल्ट ब्राउजर कौन सा है?",
                "options": ["Internet Explorer", "Microsoft Edge", "Mozilla", "Chrome"],
                "correctAnswer": 1,
                "topic": "Windows"
            },
            {
                "id": 70,
                "text": "Linux Operating System में फाइल नेम की मैक्सिमम लेंथ कितनी होती है?",
                "options": ["32", "255", "128", "64"],
                "correctAnswer": 1,
                "topic": "Linux"
            },
            {
                "id": 71,
                "text": "Multi-tasking OS में user क्या कर सकता है?",
                "options": ["एक समय में एक program run कर सकता है", "एक समय में multiple programs run कर सकता है", "सिर्फ system programs run कर सकता है", "A या B स्टेटमेंट"],
                "correctAnswer": 1,
                "topic": "Multi-tasking"
            },
            {
                "id": 72,
                "text": "Windows में current window close करने की shortcut key क्या है?",
                "options": ["Ctrl+ F4", "Alt+ F4", "Win+ R", "Win+ Shift+ F4"],
                "correctAnswer": 1,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 73,
                "text": "Linux Operating System open source है?",
                "options": ["True", "False"],
                "correctAnswer": 0,
                "topic": "Linux"
            },
            {
                "id": 74,
                "text": "Windows 10 में Personalize option कहाँ मिलता है?",
                "options": ["Start", "Colors", "Devices", "Background"],
                "correctAnswer": 3,
                "topic": "Windows Settings"
            },
            {
                "id": 75,
                "text": "Ubuntu Linux पर आधारित है?",
                "options": ["True", "False"],
                "correctAnswer": 0,
                "topic": "Ubuntu"
            },
            {
                "id": 76,
                "text": "Which directory does not contain binary files?",
                "options": ["/boot", "/etc", "/bin", "/sbin"],
                "correctAnswer": 1,
                "topic": "Linux Directory Structure"
            },
            {
                "id": 77,
                "text": "Windows 10 में Taskbar आमतौर पर screen के किस side पर होता है?",
                "options": ["Left", "Right", "Top", "Center"],
                "correctAnswer": 0,
                "topic": "Windows Interface"
            },
            {
                "id": 78,
                "text": "Windows में new folder बनाने की shortcut key क्या है?",
                "options": ["Ctrl + F", "Shift+ F", "Ctrl+ Shift+ N", "Shift+ N"],
                "correctAnswer": 2,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 79,
                "text": "Windows में Menu Bar के नीचे वाला Bar क्या कहलाता है?",
                "options": ["Menu", "Tool", "Status", "Bar"],
                "correctAnswer": 1,
                "topic": "Windows Interface"
            },
            {
                "id": 80,
                "text": "BIOS को कौन load करता है?",
                "options": ["By compiler", "By application software", "By interpreter", "By operating system"],
                "correctAnswer": 3,
                "topic": "BIOS"
            },
            {
                "id": 81,
                "text": "Windows में program close करने की shortcut key क्या है?",
                "options": ["Ctrl + C", "Alt +F4", "Ctrl+ F4", "Shift+ F4"],
                "correctAnswer": 1,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 82,
                "text": "Windows Task Manager खोलने की shortcut key क्या है?",
                "options": ["Ctrl + Shift + Del", "Shift + Ctrl + Esc", "Shift + Ctrl + Del", "Ctrl + Shift + Esc"],
                "correctAnswer": 3,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 83,
                "text": "निम्न में से कौन सा Windows version सबसे पुराना है?",
                "options": ["Windows 8", "Windows 7", "Windows 2019", "Windows XP"],
                "correctAnswer": 3,
                "topic": "Windows Versions"
            },
            {
                "id": 84,
                "text": "Disk को format करने का process क्या कहलाता है?",
                "options": ["Wiping", "Removing", "Formatting", "Cleaning"],
                "correctAnswer": 2,
                "topic": "Disk Management"
            },
            {
                "id": 85,
                "text": "निम्न में से कौन सा open source operating system है?",
                "options": ["Windows 7", "React OS", "Ubuntu", "Free BSD"],
                "correctAnswer": 2,
                "topic": "Open Source OS"
            },
            {
                "id": 86,
                "text": "Windows में current window को left side में snap करने की shortcut key क्या है?",
                "options": ["Window + Left Arrow", "Shift + Left Arrow", "Shift + L", "Window + L"],
                "correctAnswer": 0,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 87,
                "text": "Windows में Shift+ Delete का use क्या है?",
                "options": ["फाइल permanently delete करना", "फाइल copy करना", "फाइल move करना", "फाइल rename करना"],
                "correctAnswer": 0,
                "topic": "Windows Shortcuts"
            },
            {
                "id": 88,
                "text": "Linux में root user सभी commands run कर सकता है?",
                "options": ["True", "False"],
                "correctAnswer": 0,
                "topic": "Linux"
            },
            {
                "id": 89,
                "text": "फाइल को एक location से दूसरी location में move करने के लिए क्या use करते हैं?",
                "options": ["Cut & Paste", "Copy & Paste", "Delete & Retype", "None"],
                "correctAnswer": 0,
                "topic": "File Operations"
            },
            {
                "id": 90,
                "text": "CLI का पूरा नाम क्या है?",
                "options": ["Common Line Interface", "Computer Line Interface", "Command Line Interface", "None of these"],
                "correctAnswer": 2,
                "topic": "CLI"
            },
            {
                "id": 91,
                "text": "Linux operating system में print करने की command क्या है?",
                "options": ["Ptr", "Print", "Lpr", "Pwd"],
                "correctAnswer": 2,
                "topic": "Linux Commands"
            },
            {
                "id": 92,
                "text": "System को restart करना क्या कहलाता है?",
                "options": ["Cold booting", "Warm booting", "A & B", "None of these"],
                "correctAnswer": 1,
                "topic": "Booting"
            },
            {
                "id": 93,
                "text": "निम्न में से कौन सा Windows version 64-bit support करता है?",
                "options": ["Windows 8", "Windows 7", "Windows XP", "Windows 11"],
                "correctAnswer": 3,
                "topic": "Windows Versions"
            },
            {
                "id": 94,
                "text": "File Explorer क्या है?",
                "options": ["Operating System", "External Hard Drive", "Web Browser", "None"],
                "correctAnswer": 0,
                "topic": "Windows"
            },
            {
                "id": 95,
                "text": "ऑपरेटिंग सिस्टम का महत्वपूर्ण function क्या है?",
                "options": ["Memory Management", "Database Management", "Process Management", "File Management"],
                "correctAnswer": 0,
                "topic": "Operating System Functions"
            },
            {
                "id": 96,
                "text": "निम्न में से कौन सा mobile operating system है?",
                "options": ["Windows 10", "IOS", "Android", "Windows Vista"],
                "correctAnswer": 2,
                "topic": "Mobile OS"
            },
            {
                "id": 97,
                "text": "Ubuntu Canonical Limited द्वारा develop किया गया है?",
                "options": ["True", "False"],
                "correctAnswer": 0,
                "topic": "Ubuntu"
            },
            {
                "id": 98,
                "text": "निम्न में से कौन सा operating system server के लिए use होता है?",
                "options": ["Windows", "Linux", "Unix", "DOS"],
                "correctAnswer": 2,
                "topic": "Server OS"
            },
            {
                "id": 99,
                "text": "Shutdown option क्या करता है?",
                "options": ["Device Setting", "Turn of the system", "Run Application", "All of Above"],
                "correctAnswer": 1,
                "topic": "System Operations"
            },
            {
                "id": 100,
                "text": "Windows 10 में Safe Mode में boot करने के लिए किस function key का use करते हैं?",
                "options": ["F10", "F8", "F9", "F5"],
                "correctAnswer": 1,
                "topic": "Windows Boot"
            }
        ];

        // Exam state
        const examState = {
            currentQuestion: 0,
            answers: new Array(questions.length).fill(null),
            timeRemaining: 5400, // 90 minutes in seconds
            timerInterval: null,
            userPhoto: null,
            userName: "",
            userEmail: "",
            userPhone: "",
            startTime: null,
            endTime: null,
            cameraStream: null
        };

        // Camera functions
        function openCameraModal() {
            document.getElementById('cameraModal').style.display = 'flex';
            switchTab('camera');
        }

        function switchTab(tab) {
            document.getElementById('cameraTab').classList.toggle('active', tab === 'camera');
            document.getElementById('uploadTab').classList.toggle('active', tab === 'upload');
            
            document.getElementById('cameraTabContent').style.display = tab === 'camera' ? 'block' : 'none';
            document.getElementById('uploadTabContent').style.display = tab === 'upload' ? 'block' : 'none';
            
            if (tab === 'camera') {
                initializeCamera();
            }
        }

        function initializeCamera() {
            if (examState.cameraStream) {
                examState.cameraStream.getTracks().forEach(track => track.stop());
            }
            
            const constraints = {
                video: {
                    facingMode: 'user',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            };
            
            navigator.mediaDevices.getUserMedia(constraints)
                .then(function(stream) {
                    examState.cameraStream = stream;
                    const video = document.getElementById('cameraVideo');
                    video.srcObject = stream;
                })
                .catch(function(err) {
                    console.error("Camera error: ", err);
                    switchTab('upload');
                    
                    const uploadTabContent = document.getElementById('uploadTabContent');
                    uploadTabContent.innerHTML = `
                        <div class="camera-fallback">
                            <p style="color: var(--danger); margin-bottom: 15px;">
                                <i class="fas fa-exclamation-triangle"></i> 
                                Camera access denied or not available.
                            </p>
                            <p>Please upload your photo instead:</p>
                            <input type="file" id="photoUpload" accept="image/*" style="display: none;">
                            <button class="upload-btn" onclick="document.getElementById('photoUpload').click()">
                                <i class="fas fa-upload"></i> Choose Photo
                            </button>
                            <div class="camera-controls">
                                <button class="btn btn-secondary" onclick="closeCamera()">
                                    <i class="fas fa-times"></i> Cancel
                                </button>
                            </div>
                        </div>
                    `;
                    
                    document.getElementById('photoUpload').addEventListener('change', handlePhotoUpload);
                });
        }

        function handlePhotoUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    examState.userPhoto = e.target.result;
                    updatePhotoDisplay();
                    closeCamera();
                };
                reader.readAsDataURL(file);
            }
        }

        function closeCamera() {
            document.getElementById('cameraModal').style.display = 'none';
            
            if (examState.cameraStream) {
                examState.cameraStream.getTracks().forEach(track => track.stop());
                examState.cameraStream = null;
            }
        }

        function capturePhoto() {
            const video = document.getElementById('cameraVideo');
            const canvas = document.getElementById('cameraCanvas');
            const context = canvas.getContext('2d');
            
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const photoDataUrl = canvas.toDataURL('image/png');
            examState.userPhoto = photoDataUrl;
            
            updatePhotoDisplay();
            closeCamera();
        }

        function updatePhotoDisplay() {
            const photoPreview = document.getElementById('photoPreview');
            photoPreview.innerHTML = `<img src="${examState.userPhoto}" alt="User Photo">`;
            
            const userPhotoDisplay = document.getElementById('userPhotoDisplay');
            userPhotoDisplay.innerHTML = `<img src="${examState.userPhoto}" alt="User Photo">`;
            
            const reportUserPhoto = document.getElementById('reportUserPhoto');
            reportUserPhoto.innerHTML = `<img src="${examState.userPhoto}" alt="User Photo">`;
        }

        // Initialize the exam
        function initExam() {
            generateQuestionIndicators();
            updateProgress();
            startTimer();
            examState.startTime = new Date();
            
            document.getElementById('totalQuestionsDisplay').textContent = questions.length;
        }

        // Generate question indicators
        function generateQuestionIndicators() {
            const grid = document.getElementById('questionGrid');
            grid.innerHTML = '';
            
            questions.forEach((question, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'question-indicator pending';
                if (index === examState.currentQuestion) {
                    indicator.classList.add('current');
                }
                indicator.textContent = index + 1;
                indicator.onclick = () => goToQuestionNumber(index);
                grid.appendChild(indicator);
            });
            
            const summaryGrid = document.getElementById('summaryGrid');
            summaryGrid.innerHTML = '';
            
            questions.forEach((question, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'question-indicator pending';
                indicator.textContent = index + 1;
                indicator.onclick = () => {
                    goToQuestionNumber(index);
                    closeSummaryPanel();
                };
                summaryGrid.appendChild(indicator);
            });
        }

        // Update progress indicators
        function updateProgress() {
            const answered = examState.answers.filter(answer => answer !== null).length;
            const pending = questions.length - answered;
            const progressPercent = Math.round((answered / questions.length) * 100);
            
            document.getElementById('answeredCount').textContent = answered;
            document.getElementById('pendingCount').textContent = pending;
            document.getElementById('progressPercent').textContent = progressPercent;
            
            document.getElementById('progressFill').style.width = `${progressPercent}%`;
            
            const indicators = document.querySelectorAll('#questionGrid .question-indicator');
            indicators.forEach((indicator, index) => {
                indicator.className = 'question-indicator';
                
                if (examState.answers[index] !== null) {
                    indicator.classList.add('answered');
                } else {
                    indicator.classList.add('pending');
                }
                
                if (index === examState.currentQuestion) {
                    indicator.classList.add('current');
                }
            });
            
            const summaryIndicators = document.querySelectorAll('#summaryGrid .question-indicator');
            summaryIndicators.forEach((indicator, index) => {
                indicator.className = 'question-indicator';
                
                if (examState.answers[index] !== null) {
                    indicator.classList.add('answered');
                } else {
                    indicator.classList.add('pending');
                }
            });
            
            updateScore();
        }

        // Update score display
        function updateScore() {
            let correctCount = 0;
            examState.answers.forEach((answer, index) => {
                if (answer !== null && answer === questions[index].correctAnswer) {
                    correctCount++;
                }
            });
            
            document.getElementById('scoreDisplay').textContent = correctCount;
        }

        // Start the exam timer
        function startTimer() {
            updateTimerDisplay();
            
            examState.timerInterval = setInterval(() => {
                examState.timeRemaining--;
                updateTimerDisplay();
                
                if (examState.timeRemaining <= 0) {
                    clearInterval(examState.timerInterval);
                    finishExam();
                }
            }, 1000);
        }

        // Update timer display
        function updateTimerDisplay() {
            const hours = Math.floor(examState.timeRemaining / 3600);
            const minutes = Math.floor((examState.timeRemaining % 3600) / 60);
            const seconds = examState.timeRemaining % 60;
            
            document.getElementById('timer').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Select an option
        function selectOption(element) {
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            
            const optionIndex = Array.from(element.parentNode.children).indexOf(element);
            examState.answers[examState.currentQuestion] = optionIndex;
            updateProgress();
        }

        // Go to previous question
        function previousQuestion() {
            if (examState.currentQuestion > 0) {
                examState.currentQuestion--;
                loadQuestion();
            }
        }

        // Go to next question
        function nextQuestion() {
            if (examState.currentQuestion < questions.length - 1) {
                examState.currentQuestion++;
                loadQuestion();
            }
        }

        // Reset current answer
        function resetAnswer() {
            examState.answers[examState.currentQuestion] = null;
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            updateProgress();
        }

        // Load current question
        function loadQuestion() {
            const question = questions[examState.currentQuestion];
            document.getElementById('questionNumber').textContent = `Q.${examState.currentQuestion + 1}: ${question.text}`;
            document.getElementById('questionText').textContent = "Select the correct answer from the options below:";
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                if (examState.answers[examState.currentQuestion] === index) {
                    optionElement.classList.add('selected');
                }
                optionElement.onclick = () => selectOption(optionElement);
                
                const optionLabel = document.createElement('div');
                optionLabel.className = 'option-label';
                optionLabel.textContent = String.fromCharCode(65 + index);
                
                const optionText = document.createElement('div');
                optionText.className = 'option-text';
                optionText.textContent = option;
                
                optionElement.appendChild(optionLabel);
                optionElement.appendChild(optionText);
                optionsContainer.appendChild(optionElement);
            });
            
            document.getElementById('prevBtn').disabled = examState.currentQuestion === 0;
            document.getElementById('nextBtn').disabled = examState.currentQuestion === questions.length - 1;
            
            updateProgress();
        }

        // Go to specific question number
        function goToQuestionNumber(index) {
            examState.currentQuestion = index;
            loadQuestion();
        }

        // Show summary panel
        function showSummaryPanel() {
            document.getElementById('summaryModal').style.display = 'flex';
        }

        // Close summary panel
        function closeSummaryPanel() {
            document.getElementById('summaryModal').style.display = 'none';
        }

        // Show finish exam confirmation
        function finishExam() {
            closeSummaryPanel();
            
            const answered = examState.answers.filter(answer => answer !== null).length;
            const pending = questions.length - answered;
            
            document.getElementById('finishAnsweredCount').textContent = answered;
            document.getElementById('finishPendingCount').textContent = pending;
            
            document.getElementById('finishModal').style.display = 'flex';
        }

        // Close finish modal
        function closeFinishModal() {
            document.getElementById('finishModal').style.display = 'none';
        }

        // Submit exam and show report
        function submitExam() {
            closeFinishModal();
            clearInterval(examState.timerInterval);
            examState.endTime = new Date();
            generateReport();
            document.getElementById('reportModal').style.display = 'flex';
        }

        // Generate detailed report
        function generateReport() {
            let correctCount = 0;
            let wrongCount = 0;
            let unattemptedCount = 0;
            const incorrectAnswers = [];
            const unattemptedQuestions = [];
            
            const topicPerformance = {};
            
            questions.forEach((question, index) => {
                if (!topicPerformance[question.topic]) {
                    topicPerformance[question.topic] = {
                        total: 0,
                        correct: 0,
                        wrong: 0,
                        unattempted: 0
                    };
                }
                
                topicPerformance[question.topic].total++;
                
                if (examState.answers[index] === null) {
                    unattemptedCount++;
                    unattemptedQuestions.push(index + 1);
                    topicPerformance[question.topic].unattempted++;
                } else if (examState.answers[index] === question.correctAnswer) {
                    correctCount++;
                    topicPerformance[question.topic].correct++;
                } else {
                    wrongCount++;
                    incorrectAnswers.push({
                        questionNumber: index + 1,
                        question: question.text,
                        userAnswer: question.options[examState.answers[index]],
                        correctAnswer: question.options[question.correctAnswer]
                    });
                    topicPerformance[question.topic].wrong++;
                }
            });
            
            const timeTakenMs = examState.endTime - examState.startTime;
            const hours = Math.floor(timeTakenMs / (1000 * 60 * 60));
            const minutes = Math.floor((timeTakenMs % (1000 * 60 * 60)) / (1000 * 60));
            const timeTakenStr = `${hours > 0 ? hours + 'hr ' : ''}${minutes}min`;
            
            const percentage = Math.round((correctCount / questions.length) * 100);
            let grade = "FAIL";
            if (percentage >= 90) grade = "YOU ARE IN THE TOPER";
            else if (percentage >= 75) grade = "FIRST";
            else if (percentage >= 60) grade = "SECOND";
            else if (percentage >= 40) grade = "PASS";
            
            document.getElementById('reportUserName').textContent = examState.userName;
            document.getElementById('reportUserEmail').textContent = examState.userEmail;
            document.getElementById('reportUserPhone').textContent = examState.userPhone;
            document.getElementById('reportExamDate').textContent = new Date().toLocaleDateString('en-GB');
            document.getElementById('reportTimeTaken').textContent = timeTakenStr;
            document.getElementById('reportTotalQuestions').textContent = questions.length;
            document.getElementById('reportCorrectAnswers').textContent = correctCount;
            document.getElementById('reportWrongAnswers').textContent = wrongCount;
            document.getElementById('reportUnattempted').textContent = unattemptedCount;
            document.getElementById('reportFinalScore').textContent = `${correctCount}/${questions.length} (${percentage}%)`;
            document.getElementById('reportGrade').textContent = grade;
            
            const incorrectAnswersBody = document.getElementById('incorrectAnswersBody');
            incorrectAnswersBody.innerHTML = '';
            incorrectAnswers.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.questionNumber}</td>
                    <td>${item.question}</td>
                    <td>${item.userAnswer}</td>
                    <td>${item.correctAnswer}</td>
                `;
                incorrectAnswersBody.appendChild(row);
            });
            
            document.getElementById('incorrectCount').textContent = incorrectAnswers.length;
            
            document.getElementById('unattemptedCount').textContent = unattemptedCount;
            document.getElementById('unattemptedQuestionsList').textContent = 
                unattemptedQuestions.length > 0 ? unattemptedQuestions.join(', ') : '-';
            
            const topicPerformanceContainer = document.getElementById('topicPerformance');
            topicPerformanceContainer.innerHTML = '';
            
            for (const topic in topicPerformance) {
                const stats = topicPerformance[topic];
                const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                
                const topicCard = document.createElement('div');
                topicCard.className = 'topic-card';
                topicCard.innerHTML = `
                    <div class="topic-name">${topic}</div>
                    <div class="topic-stats">
                        <span>Total: ${stats.total}</span>
                        <span>Correct: ${stats.correct}</span>
                    </div>
                    <div class="topic-stats">
                        <span>Wrong: ${stats.wrong}</span>
                        <span>Unattempted: ${stats.unattempted}</span>
                    </div>
                    <div class="topic-accuracy">${accuracy}%</div>
                `;
                topicPerformanceContainer.appendChild(topicCard);
            }
        }

        // Close report
        function closeReport() {
            document.getElementById('reportModal').style.display = 'none';
            document.getElementById('examScreen').style.display = 'none';
            document.getElementById('loginScreen').style.display = 'block';
        }

        // Download report as PDF
        function downloadReport() {
            const element = document.getElementById('reportContent');
            const opt = {
                margin: 10,
                filename: `Cyber_Rakshak_Exam_Report_${examState.userName.replace(/\s+/g, '_')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true,
                    logging: true
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            const downloadBtn = document.querySelector('.btn-primary');
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            downloadBtn.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
                alert('Report downloaded successfully!');
            }).catch(error => {
                console.error('PDF generation failed:', error);
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
                alert('PDF download failed. Opening report in new window for printing...');
                const reportWindow = window.open('', '_blank');
                reportWindow.document.write(`
                    <html>
                        <head>
                            <title>Cyber Rakshak Institute - Exam Report - ${examState.userName}</title>
                            <style>
                                body { font-family: Arial, sans-serif; padding: 20px; }
                                .report-section { margin-bottom: 30px; }
                                table { width: 100%; border-collapse: collapse; margin: 15px 0; }
                                th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                                th { background: #f5f5f5; }
                                .institute-header { text-align: center; margin-bottom: 30px; color: #1a237e; }
                            </style>
                        </head>
                        <body>
                            <div class="institute-header">
                                <h1>CYBER RAKSHAK INSTITUTE</h1>
                                <h3>Exam Report</h3>
                            </div>
                            ${element.innerHTML}
                            <script>
                                window.onload = function() {
                                    window.print();
                                };
                            <\/script>
                        </body>
                    </html>
                `);
                reportWindow.document.close();
            });
        }

        // Start exam (from login screen)
        function startExam() {
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Only name and phone are required
            if (!fullName || !phone) {
                alert('कृपया कम से कम नाम और फोन नंबर भरें');
                return;
            }
            
            examState.userName = fullName;
            examState.userEmail = email || "Not Provided";
            examState.userPhone = phone;
            
            document.getElementById('userNameDisplay').innerHTML = `<i class="fas fa-user"></i> ${fullName}`;
            document.getElementById('userEmailDisplay').innerHTML = `<i class="fas fa-envelope"></i> ${examState.userEmail}`;
            document.getElementById('userPhoneDisplay').innerHTML = `<i class="fas fa-phone"></i> ${phone}`;
            
            document.getElementById('reportUserName').textContent = fullName;
            document.getElementById('reportUserEmail').textContent = examState.userEmail;
            document.getElementById('reportUserPhone').textContent = phone;
            
            document.getElementById('reportExamId').textContent = `CRI-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
            
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('examScreen').style.display = 'block';
            
            initExam();
            loadQuestion();
        }

        // Initialize file upload event listener
        document.addEventListener('DOMContentLoaded', function() {
            const photoUpload = document.getElementById('photoUpload');
            if (photoUpload) {
                photoUpload.addEventListener('change', handlePhotoUpload);
            }
        });

        // Initialize the app
        window.onload = function() {
            // Any additional initialization if needed
        };