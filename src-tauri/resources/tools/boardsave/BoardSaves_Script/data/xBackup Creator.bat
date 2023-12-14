@echo off
cls
title Backup Creator
color 06
mode con cols=85 lines=20
echo Welcome to Backup Creator
echo.
echo 1 - CS8100
echo 2 - CS81003D
echo 3 - CS8100 SC
echo 4 - CS81003D SC
echo 5 - CS8200
echo.
set /p unit=Select the unit :
set /p serial=Serial Number :

echo Date and Time : %date:~-4%%date:~3,2%%date:~0,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set /p datecorrect=System date and time format displayed above is correct, YYYYMMDD_HHMMSS (Y/N) ?
if /I %datecorrect%==Y set timef=%date:~-4%%date:~3,2%%date:~0,2%_%time:~0,2%%time:~3,2%%time:~6,2%
if /I %datecorrect%==N set /p timef=Please enter manually the date and time (YYYYMMDD_HHMMSS) :

If %unit%==1 goto 8100
If %unit%==2 goto 81003D
If %unit%==3 goto 8100SC
If %unit%==4 goto 81003DSC
If %unit%==5 goto 8200


:8100
set name=OSIRIS
set path=C:\ProgramData\TW\AcqCS8100\Parameters

mkdir %path%\%name%_%serial%_%timef%

copy CJ848_GEN*.xml %path%\%name%_%serial%_%timef%
copy CJ848_MOT*.xml %path%\%name%_%serial%_%timef%

goto xml

:81003d
set name=BOSTON
set path=C:\ProgramData\TW\AcqBoston\Parameters

mkdir %path%\%name%_%serial%_%timef%
copy CJ848_%name%*.xml %path%\%name%_%serial%_%timef%


goto xml

:8100sc
set name=MALAGA
set path=C:\ProgramData\TW\AcqCEPH_SC\Parameters

mkdir %path%\%name%_%serial%_%timef%
copy CJ848_%name%*.xml %path%\%name%_%serial%_%timef%

goto xml

:81003dsc
set name=GALWAY
set path=C:\ProgramData\TW\AcqGalway\Parameters

mkdir %path%\%name%_%serial%_%timef%
copy CJ848_%name%*.xml %path%\%name%_%serial%_%timef%

goto xml

:8200
set name=SYRACUSE
set path=C:\ProgramData\TW\AcqSyracuse

mkdir %path%\%name%_%serial%_%timef%
copy CJ848_%name%*.xml %path%\%name%_%serial%_%timef%

goto xml

:xml
echo ^<?xml version="1.0" ?^> >%path%\%name%_%serial%_%timef%.xml
echo ^<trophy^> >>%path%\%name%_%serial%_%timef%.xml
echo ^<comment^> Factory Parameters ^</comment^> >>%path%\%name%_%serial%_%timef%.xml
echo ^</trophy^> >>%path%\%name%_%serial%_%timef%.xml
pause
cls
echo The boardsave of %serial% has been copied in:
echo %path%\%name%_%serial%_%timef%
pause

exit
