# Set the path to the text file containing the folder names
$inputFile = "folder_and_sub_names_arabic.txt"

# Check if the file exists
if (-not (Test-Path $inputFile)) {
    Write-Host "File $inputFile not found!"
    exit
}

# Read each line from the UTF-8 encoded text file
$folderNames = Get-Content -Path $inputFile -Encoding UTF8

# Create folders for each name in the list
foreach ($folderName in $folderNames) {
    Write-Host "Creating folder: $folderName"
    # Create the folder if it doesn't already exist
    if (-not (Test-Path $folderName)) {
        New-Item -Path $folderName -ItemType Directory
    } else {
        Write-Host "Folder $folderName already exists."
    }
}

Write-Host "Done creating folders."
