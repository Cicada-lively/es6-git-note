
        git分布式
        svn(集中式) 需要一台中央服务器
        <b>git的区别</b>
        速度比svn 快 
        SVN中每个文件夹都有一个文件.svn文件，git有一个单独的文件.git文件夹 
    
    
        ##配置用户 （不配置用户不能提交代码）
        git config --list
        git config --global user.name '名字'
        git config --global user.email '邮箱'
    
   
    
        ##Linux 命令
        pwd  打印当前目录  print working directory
        mkdir 文件夹名     创建目录
        touch 文件       创建文件
        cat 文件名
        vi 文件名
            i: 插入模式   esc推出编辑模式  :q! 强制退出  :wq  保存并退出
        cd 目录   进入目录
        进入D盘  cd d:
        rm -rf * 暴力删除所有文件 
        rm -rf 文件夹    删除文件 
        rm 文件名    删除文件 
        ls -al  显示目录下所有的文件 
    
    

    ##初始化git
    <p>不要在子文件夹里初始化 
        一个项目初始化一次，不能嵌套 
        git init 告诉git那个文件夹被git所管理 
        git add .或者 -A  存放到暂存区 
        git commit -m '消息'  存放到历史区 
        git status 查看git状态   红色表示在工作区   暂存区是绿色   历史去没有颜色 
        git rm --cached .  -r  删除暂存区   
        每一个版本对应一个版本号 
        工作区到版本库   git commit -a -m '提交内容'  前提是这个文件需要提交过一次


        ## 三种比较方法
        工作区和暂存区比较     git diff 
        工作区和历史库比较     git diff master 
        暂存区和历史区比较     git diff --cached 

        撤销
        从暂存区中将工作内容覆盖掉  git checkout  文件名 
        暂存区回滚到上一次    git reset HEAD 文件名 
        回滚历史版本    git reset --hard 版本号 
                       git relog   查看所有版本 

    ##创建分支
    -git branch  查看分支 
    -git branch 分支名 创建分支 
    -git checkout 分支名  切换分支 
    -git branch -D 分支名   删除分支 
    删除分支时，当前用户不能再当前要删除的分支上 
    -git checkout -b dev  创建并且切换分支  

    ##文件修改切换分支
    - git stash  暂存文件
    - git stash pop 还原暂存的内容
    分支有更改不能直接切换，可以提交更改或者暂存更改，过渡区覆盖掉工作区

    ##合并分支
    -git merge 
    先创建主干，在主干的基础上添加一个分支，在分支上进行提交，切换到主干进行提交


   

    ##本地-> github
    -先有github账号
    ## 本地提交
    - README.md
    - 创建一个 .gitignore 
    - git不会上传空文件夹 添加 .gitkeep 在空文件夹内
    

    ## 关联远程
    git remote add origin 地址

    ## 删除关联
    
    git remote rm 名字

    推送代码
    git push origin master
    
    拉去最新的代码
    git pull origin master

    ## gh-pages 分支发布我们的静态页
    - 在项目中创建一个 gh-pages的分支
    - 将分支提到线上仓库里面
    - 找到提供给你的网址
    


