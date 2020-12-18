# eyear
**블루투스 이어폰 또는 청각 장애인들을 위한 텍스트, 진동을 통한 알림 받는 애플리케이션**

####  [언어]
Python, javaScript, react-native(JSX)

####  [기능]

-위험도를 측정한 경고음출력 

-음성->text 출력


#### [환경] 
ios + 구름IDE (container) HTML 서버 + ReactNative(visual Studio code, expo) + Microsoft MachinLearning Studio + Google Cloud API+ (가상컴퓨팅 크롤링작업, 컨테이너 생성)구름IDE


#### [협업 프로그램]
zeplin+Adobe XD


#### [API 및 샘플코드, 라이브러리] 
Google AI API(speech to text), 셀리니움(웹크롤링)


#### [머신러닝 작업 사이트] 
https://teachablemachine.withgoogle.com/train 
### [speech to Text]
https://github.com/react-native-voice/voice

#### [개발일정]
https://teams.microsoft.com/l/file/87A8546C-626B-4068-8034-FAE4FC95A79A?tenantId=4e1f6499-97d3-4405-8483-13d09b9d4203&fileType=xlsx&objectUrl=https%3A%2F%2Floe369.sharepoint.com%2Fsites%2Fmsteams_fe97af%2FShared%20Documents%2F%EC%B2%AD%EA%B0%81%EC%9E%A5%EC%95%A0%EC%9D%B8%20APP%EA%B0%9C%EB%B0%9C%2F%EA%B0%9C%EB%B0%9C-%EC%9E%90%EA%B2%BD%2F%EA%B0%9C%EB%B0%9C%20%EC%9D%BC%EC%A0%95.xlsx&baseUrl=https%3A%2F%2Floe369.sharepoint.com%2Fsites%2Fmsteams_fe97af&serviceName=teams&threadId=19:8df63136d53746c3a314c0f12429597e@thread.tacv2&groupId=a79c0c6b-a6f4-4574-9135-54efd800ae05

-------------------------------------------------------------------------------------------------------------------------------------
#### [src/.py]

-transcribe_streaming_mic.py: 실시간 text출력 

-sound_recorder.py: 사운드 10초 저장 

-quickstart.py: file출력 

#### [src/.html]

-index.html: 머신러닝 음성인식 분류
