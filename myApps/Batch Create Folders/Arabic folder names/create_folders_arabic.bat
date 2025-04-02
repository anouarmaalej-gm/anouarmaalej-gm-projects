@echo off
setlocal enabledelayedexpansion

:: Set the path to the text file containing the folder names
set "inputFile=folder_names_arabic.txt"

:: Check if the file exists
if not exist "%inputFile%" (
    echo File %inputFile% not found!
    exit /b
)

:: Read each line in the file and create a folder
for /f "usebackq delims=" %%A in ("%inputFile%") do (
    set "folderName=%%A"
    echo Creating folder: !folderName!
    mkdir "!folderName!"
)

echo Done creating folders.
pause

:: --------------------------------------------------------------------------------------
:: COMPARE TO THE ENGLISH VERSION
:: --------------------------------------------------------------------------------------


:: @echo off
:: Script to create folders from a list of names in a text file
:: Ensure the text file is in the same directory as this script or provide the full path

:: setlocal enabledelayedexpansion

:: REM Specify the path to the text file containing folder names
:: "input_file=folder_names.txt"

:: REM Check if the input file exists
:: if not exist "%input_file%" (
    :: echo Error: File "%input_file%" not found.
   ::  pause
   ::  exit /b 1
:: )

:: REM Read each line from the text file and create folders
:: for /f "tokens=*" %%F in (%input_file%) do (
::     set "folder_name=%%F"
::      REM Remove any leading/trailing spaces from the folder name
::     set "folder_name=!folder_name: =!"
::     REM Create the folder if it doesn't already exist
::     if not exist "!folder_name!" (
::         mkdir "!folder_name!"
::         echo Created folder: "!folder_name!"
::     ) else (
::         echo Folder already exists: "!folder_name!"
::     )
:: )

:: echo All folders have been processed.
:: pause
