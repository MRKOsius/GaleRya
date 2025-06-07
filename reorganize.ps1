# Create new directory structure
New-Item -ItemType Directory -Force -Path @(
    "src/app/(auth)/login",
    "src/app/(auth)/register",
    "src/app/(dashboard)/admin",
    "src/app/(dashboard)/user",
    "src/app/(public)/gallery",
    "src/app/(public)/about",
    "src/components/common/buttons",
    "src/components/common/forms",
    "src/components/common/layout",
    "src/components/features/gallery",
    "src/components/features/admin",
    "src/components/features/auth",
    "src/components/shared",
    "src/lib/api",
    "src/lib/hooks",
    "src/lib/utils",
    "src/styles",
    "src/types"
)

# Move files to their new locations
# Auth related files
Move-Item -Force "src/app/auth/*" "src/app/(auth)/" -ErrorAction SilentlyContinue
Move-Item -Force "src/app/login/*" "src/app/(auth)/login/" -ErrorAction SilentlyContinue

# Dashboard related files
Move-Item -Force "src/app/admin/*" "src/app/(dashboard)/admin/" -ErrorAction SilentlyContinue
Move-Item -Force "src/app/dashboard/*" "src/app/(dashboard)/user/" -ErrorAction SilentlyContinue

# Public pages
Move-Item -Force "src/app/gallery/*" "src/app/(public)/gallery/" -ErrorAction SilentlyContinue
Move-Item -Force "src/app/about/*" "src/app/(public)/about/" -ErrorAction SilentlyContinue

# Move components
Move-Item -Force "src/app/components/*" "src/components/common/" -ErrorAction SilentlyContinue

# Move global styles
Move-Item -Force "src/app/globals.css" "src/styles/" -ErrorAction SilentlyContinue

# Move utils
Move-Item -Force "src/utils/*" "src/lib/utils/" -ErrorAction SilentlyContinue

Write-Host "Directory reorganization completed!" 