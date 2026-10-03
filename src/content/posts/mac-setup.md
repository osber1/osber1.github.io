---
title: "Mac Setup"
date: 2026-10-03
category: macos
tags: ["macos", "homebrew", "setup"]
summary: "My new Mac setup: a Brewfile with all apps and tools, a few manual installs and the macOS settings I change."
---
Everything I install and change on a fresh Mac, in one place.

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install tools

Save this as `Brewfile`:

```ruby
# Casks
cask "affine"
cask "brave-browser"
cask "doll"
cask "iina"
cask "jetbrains-toolbox"
cask "libreoffice"
cask "postman"
cask "rancher"
cask "slack"
cask "visual-studio-code"
cask "vorssaint"
cask "thaw"

# Formulae
brew "atuin"
brew "node"
brew "openjdk@17"
brew "openjdk@21"
brew "openjdk@25"
brew "atomicjar/tap/testcontainers-desktop"
```

Then run this from the same directory:

```bash
brew bundle
```

Add shell completion for Docker and the Atuin shell history to `~/.zshrc`:

```bash
cat >> ~/.zshrc << 'EOF'
autoload -Uz compinit && compinit
source <(docker completion zsh)
eval "$(atuin init zsh)"
EOF
```

### App setup

#### AutoRaise

Focus the window under the mouse pointer without clicking.

![AutoRaise preferences](/images/blog/mac-setup/autoraise.webp)

#### Doll

Shows the Dock notification badges in the menu bar.

![Doll preferences](/images/blog/mac-setup/doll.webp)

### Manual install

- [AutoRaise](https://github.com/sbmpost/AutoRaise/releases)
- [Codex app](https://developers.openai.com/codex/app/)
- [Logi Options+](https://www.logitech.com/en-eu/software/logi-options-plus)

### macOS settings

```bash
# Dock: minimize windows into the app icon, hide recent apps
defaults write com.apple.dock minimize-to-application -bool true
defaults write com.apple.dock show-recents -bool false

# Finder: open the home folder, show the path bar, use list view
defaults write com.apple.finder NewWindowTarget -string "PfHm"
defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}/"
defaults write com.apple.finder ShowPathbar -bool true
defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"

# Trackpad: tap to click
defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true
defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1

# Menu bar: show the battery percentage
defaults -currentHost write com.apple.controlcenter BatteryShowPercentage -bool true

# Apply the changes
killall Dock Finder ControlCenter
```

A few things from my old list are not here on purpose:

- **Battery percentage:** the old `com.apple.menuextra.battery ShowPercent` setting does nothing on current macOS. The new setting is `BatteryShowPercentage` in `com.apple.controlcenter`, and it is stored per machine, so it needs `-currentHost`. You can also turn it on in System Settings → Control Center → Battery → Show Percentage.
- **Scroll direction:** setting `com.apple.swipescrolldirection` to `true` is already the default (natural scrolling), so there is nothing to set.
- **Tap to click:** it was written to four different places. The two above are enough for the built-in trackpad. If you use an external Magic Trackpad, also run `defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true`.
- **Restart:** tap to click may need a log out and back in to take effect.
