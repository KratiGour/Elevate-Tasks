import os
import shutil
from pathlib import Path

print("📁 REAL FILE ORGANIZER with PATH INPUT & FULL CLEANUP")
print("=" * 50)

EXT_TO_FOLDER = {
    '.pdf': 'PDFs', '.doc': 'Documents', '.docx': 'Documents',
    '.txt': 'Documents', '.rtf': 'Documents',
    '.jpg': 'Images', '.jpeg': 'Images', '.png': 'Images', '.gif': 'Images',
    '.mp4': 'Videos', '.avi': 'Videos', '.mkv': 'Videos',
    '.mp3': 'Audio', '.wav': 'Audio',
    '.zip': 'Archives', '.rar': 'Archives', '.py': 'Code', '.java': 'Code'
}

class FileOrganizer:
    def __init__(self):
        self.moves = []
        self.created_folders = []
    
    def get_extension(self, filename):
        return Path(filename).suffix.lower()
    
    def get_category(self, ext):
        return EXT_TO_FOLDER.get(ext, 'Others')
    
    def organize(self, folder_path):
        folder = Path(folder_path)
        
        if not folder.exists():
            print(f"❌ ERROR: Folder '{folder}' does not exist!")
            return
        
        print(f"🎯 Organizing: {folder.absolute()}")
        print("-" * 50)
        
        moved_files = []
        files_found = 0
        self.created_folders = []  # Track newly created folders
        
        for file_path in folder.iterdir():
            if file_path.is_file() and file_path.name != "file_organizer.py":
                files_found += 1
                ext = self.get_extension(file_path)
                category = self.get_category(ext)
                
                dest_folder = folder / category
                dest_folder.mkdir(exist_ok=True)
                
                # Track if folder was newly created
                if not dest_folder.exists() or len(list(dest_folder.iterdir())) == 0:
                    self.created_folders.append(dest_folder)
                
                dest_path = dest_folder / file_path.name
                if dest_path.exists():
                    stem = Path(file_path.name).stem
                    dest_path = dest_folder / f"{stem}_copy{file_path.suffix}"
                
                if dest_path != file_path:
                    shutil.move(str(file_path), str(dest_path))
                    moved_files.append((str(file_path), str(dest_path)))
                    print(f"✅ {file_path.name} → {category}/")
                else:
                    print(f"⏭️  {file_path.name} (already organized)")
        
        self.moves.extend(moved_files)
        print("-" * 50)
        print(f"🎉 Found {files_found} files, moved {len(moved_files)} files!")
    
    def undo(self):
        if not self.moves:
            print("❌ No actions to undo!")
            return
        
        print("🔄 COMPLETE CLEANUP - Moving files back & deleting folders...")
        
        # Step 1: Move files back to original locations
        for src, dest in reversed(self.moves):
            if os.path.exists(dest):
                shutil.move(dest, src)
                print(f"↩️  {Path(dest).name} → original location")
        
        # Step 2: Delete created category folders (only if empty)
        print("\n🗑️  Deleting empty category folders...")
        deleted_count = 0
        for folder in self.created_folders:
            if folder.exists() and len(list(folder.iterdir())) == 0:
                folder.rmdir()
                print(f"🗑️  Deleted: {folder.name}/")
                deleted_count += 1
            elif folder.exists():
                print(f"⚠️  Kept: {folder.name}/ (contains files)")
        
        # Clear tracking
        self.moves = []
        self.created_folders = []
        print(f"\n✅ Undo complete! Deleted {deleted_count} empty folders!")
    
    def show_status(self):
        print("\n📊 Current Status:")
        print(f"Moves tracked: {len(self.moves)}")
        print(f"Folders tracked: {len(self.created_folders)}")

def main():
    organizer = FileOrganizer()
    
    while True:
        print("\n📁 FILE ORGANIZER")
        print("1. Enter folder path & organize")
        print("2. Undo (moves files back + deletes empty folders)")
        print("3. Show status")
        print("4. Exit")
        
        choice = input("Choose (1-4): ").strip()
        
        if choice == '1':
            folder_path = input("Enter FULL folder path (e.g. C:\\Users\\krati\\Desktop): ").strip()
            if folder_path:
                organizer.organize(folder_path)
            else:
                print("❌ Empty path!")
                
        elif choice == '2':
            organizer.undo()
            
        elif choice == '3':
            organizer.show_status()
            
        elif choice == '4':
            print("👋 Goodbye!")
            break
            
        else:
            print("❌ Invalid choice!")

if __name__ == "__main__":
    main()
