### Setting Up React Using Vite (For Windows Users with Git Bash)

If you encounter issues setting up Vite on Windows, you can use Git Bash and integrate it with VS Code. Follow these steps:

---

1. **Install Git Bash**:  
   Download and install Git Bash if it's not already installed:  
   [Git Bash Download](https://git-scm.com/downloads)

2. **Open Git Bash**:  
   - Right-click on your desktop or project folder and select `Git Bash Here`.
   - Use Git Bash as your terminal for installing and setting up Vite.

3. **Install Vite**:  
   Run the following command:
   ```bash
   npm create vite@latest
   ```
   You'll be prompted to:
   - **Select Framework**: Choose `React`.
   - **Specify Folder Name**: Use `vite-project` (default) or any custom name.
   - **Choose Variant**:  
     - Select **JavaScript** or **JavaScript + SWC**.  
       SWC is faster for building projects.

4. **Navigate to the Project Folder**:  
   ```bash
   cd vite-project
   ```
   Replace `vite-project` with your folder name if different.

5. **Install Dependencies**:  
   ```bash
   npm install
   ```

6. **Run the Development Server**:  
   ```bash
   npm run dev
   ```

---

### Using Git Bash in VS Code

1. **Set Git Bash as the Default Terminal**:
   - Open VS Code.
   - Go to **View > Terminal** or press  (Ctrl + `).
   - In the terminal dropdown (top-right of the terminal panel), click **Select Default Profile**.
   - Select `Git Bash` from the options.

2. **Open the Terminal in Git Bash**:
   - Click the **+** sign in the terminal.
   - Git Bash will open as the default terminal.

3. **Continue the Setup**:
   Use the commands listed above (steps 3–6) in Git Bash within VS Code.

---