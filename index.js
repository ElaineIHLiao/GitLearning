0106_A

git clone https://github.com/ElaineIHLiao/GitLearning.git



git add .
git commit -m "first commit"
git push -u origin


建立分支
$ git branch <branchname>

查看目前有那些分支
$ git branch

切換分支
$ git checkout <branchname>

將某個分支merge進master
$ git checkout master
$ git merge <branchname>

刪除分支
$ git branch -d <branchname>