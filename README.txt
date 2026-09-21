TRADE BOOK v2.1 - update and turn on sync (phone and computer)

STEP 1: SAVE A BACKUP
 On the computer (where your latest trades are): open the app, More, Backup and
 export, Save encrypted backup. Keep the file.

STEP 2: UPDATE THE APP FILES
 - Unzip tradebook.zip.
 - On github.com open your Tradebook repository, Add file, Upload files.
 - Select all 8 files from the unzipped folder and Commit changes.
   (Same names replace the old ones.)
 - Wait a minute, then close and reopen the app on each device, twice if the old
   screen shows. Your trades and PIN carry over.

STEP 3: CREATE A PRIVATE REPOSITORY FOR THE SYNCED DATA (once)
 - github.com, tap +, New repository. Name: tradebook-data. Choose PRIVATE.
   Tick "Add a README file". Create repository.
 - Profile picture, Settings, Developer settings (bottom of the left menu),
   Personal access tokens, Fine-grained tokens, Generate new token.
 - Name: Trade Book. Choose the longest expiry offered.
   Repository access: Only select repositories, pick tradebook-data.
   Permissions, Repository permissions, Contents: Read and write.
   Generate token and copy it. GitHub shows it only once.
 - Send the token to yourself so you can paste it on the phone too.
   Delete that message afterwards.

STEP 4: TURN ON SYNC, COMPUTER FIRST
 - On the computer: More, Sync between devices, "First device".
   Enter tradebook-data with your username (username/tradebook-data), the token,
   and a sync password of your choice (8+ characters). Start sync.
 - On the phone: More, Sync between devices, "Other device". Enter the same
   repository, token and sync password. The phone asks what to do with trades
   already on it. Choose "Replace with the synced copy" if they are the same
   trades you entered on the computer. The phone saves a backup file first.

NOTES
 - The sync password is separate from your PIN. If you forget it, the copy on
   GitHub cannot be read. Your local data stays safe.
 - Sync copies deletions too. Keep taking backups.
 - The newest edit wins if the same trade is changed on two devices, so keep your
   phone and computer clocks correct.
 - If GitHub says the token expired: More, Sync between devices, Replace token.
