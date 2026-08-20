#!/bin/bash

# Target Directories
WEBSITE_DIR="/Users/edwinsamodra/Code/edwinsamodra.github.io"
PROFILE_DIR="/Users/edwinsamodra/Code/edwinsamodra"

# Function to pull README from profile repo to website repo
pull_readme() {
    echo "Syncing README.md from profile repo (edwinsamodra) to website repo (edwinsamodra.github.io)..."
    
    # Pull latest changes from edwinsamodra repo
    cd "$PROFILE_DIR" || exit 1
    git pull origin main
    
    # Copy to website repo
    cp "$PROFILE_DIR/README.md" "$WEBSITE_DIR/README.md"
    echo "Successfully pulled README.md to website repo."
}

# Function to push README from website repo to profile repo
push_readme() {
    echo "Syncing README.md from website repo (edwinsamodra.github.io) to profile repo (edwinsamodra)..."
    
    # Copy to profile repo
    cp "$WEBSITE_DIR/README.md" "$PROFILE_DIR/README.md"
    
    # Check if there are changes in profile repo
    cd "$PROFILE_DIR" || exit 1
    if [[ -n $(git status --porcelain README.md) ]]; then
        echo "Changes detected in README.md. Committing and pushing to edwinsamodra repo..."
        git add README.md
        git commit -m "sync: update README.md from edwinsamodra.github.io"
        git push origin main
        echo "Successfully synced and pushed to edwinsamodra repo."
    else
        echo "No changes detected in README.md. Skipping sync."
    fi
}

case "$1" in
    pull)
        pull_readme
        ;;
    push)
        push_readme
        ;;
    *)
        echo "Usage: $0 {pull|push}"
        exit 1
        ;;
esac
