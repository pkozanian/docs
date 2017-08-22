Search.setIndex({docnames:["design","examples","getting-started","help","index","modules","pywren","pywren.scripts","pywren.serialize","pywren.serialize.cloudpickle","pywren.storage"],envversion:52,filenames:["design.rst","examples.rst","getting-started.rst","help.rst","index.rst","modules.rst","pywren.rst","pywren.scripts.rst","pywren.serialize.rst","pywren.serialize.cloudpickle.rst","pywren.storage.rst"],objects:{"":{pywren:[6,0,0,"-"]},"pywren.ec2standalone":{b64s:[6,1,1,""],create_instance_profile:[6,1,1,""],launch_instances:[6,1,1,""],list_instances:[6,1,1,""],prettyprint_instances:[6,1,1,""],sd:[6,1,1,""],tags_to_dict:[6,1,1,""],terminate_instances:[6,1,1,""]},"pywren.executor":{Executor:[6,2,1,""]},"pywren.executor.Executor":{agg_data:[6,3,1,""],call_async:[6,4,1,""],get_logs:[6,4,1,""],invoke_with_keys:[6,4,1,""],map:[6,4,1,""],put_data:[6,4,1,""],reduce:[6,4,1,""]},"pywren.future":{JobState:[6,2,1,""],ResponseFuture:[6,2,1,""]},"pywren.future.JobState":{"new":[6,5,1,""],error:[6,5,1,""],invoked:[6,5,1,""],running:[6,5,1,""],success:[6,5,1,""]},"pywren.future.ResponseFuture":{GET_RESULT_SLEEP_SECS:[6,5,1,""],add_done_callback:[6,4,1,""],cancel:[6,4,1,""],cancelled:[6,4,1,""],done:[6,4,1,""],exception:[6,4,1,""],result:[6,4,1,""],running:[6,4,1,""]},"pywren.invokers":{DummyInvoker:[6,2,1,""],LambdaInvoker:[6,2,1,""]},"pywren.invokers.DummyInvoker":{config:[6,4,1,""],invoke:[6,4,1,""],run_jobs:[6,4,1,""]},"pywren.invokers.LambdaInvoker":{config:[6,4,1,""],invoke:[6,4,1,""]},"pywren.local":{local_handler:[6,1,1,""]},"pywren.multiwren":{compute_flops:[6,1,1,""]},"pywren.queues":{SQSInvoker:[6,2,1,""],sqs_run_local:[6,1,1,""]},"pywren.queues.SQSInvoker":{config:[6,4,1,""],invoke:[6,4,1,""]},"pywren.runtime":{get_runtime_info:[6,1,1,""],runtime_valid:[6,1,1,""],version_str:[6,1,1,""]},"pywren.scripts":{pywrencli:[7,0,0,"-"],setupscript:[7,0,0,"-"]},"pywren.scripts.pywrencli":{list_all_funcs:[7,1,1,""],main:[7,1,1,""]},"pywren.scripts.setupscript":{check_aws_region_valid:[7,1,1,""],check_bucket_exists:[7,1,1,""],check_overwrite_function:[7,1,1,""],check_valid_bucket_name:[7,1,1,""],click_validate_prompt:[7,1,1,""],create_unique_bucket_name:[7,1,1,""],get_lambda_regions:[7,1,1,""],get_username:[7,1,1,""],validate_lambda_function_name:[7,1,1,""],validate_lambda_role_name:[7,1,1,""],validate_s3_prefix:[7,1,1,""]},"pywren.serialize":{cloudpickle:[9,0,0,"-"],default_preinstalls:[8,0,0,"-"],module_dependency:[8,0,0,"-"],serialize:[8,0,0,"-"],util:[8,0,0,"-"]},"pywren.serialize.cloudpickle":{cloudpickle:[9,0,0,"-"]},"pywren.serialize.cloudpickle.cloudpickle":{CloudPickler:[9,2,1,""],dump:[9,1,1,""],dumps:[9,1,1,""],dynamic_subimport:[9,1,1,""],is_tornado_coroutine:[9,1,1,""],islambda:[9,1,1,""],print_exec:[9,1,1,""],subimport:[9,1,1,""]},"pywren.serialize.cloudpickle.cloudpickle.CloudPickler":{dispatch:[9,5,1,""],dump:[9,4,1,""],extract_code_globals:[9,6,1,""],extract_func_data:[9,4,1,""],inject_addons:[9,4,1,""],save_attrgetter:[9,4,1,""],save_buffer:[9,4,1,""],save_builtin_function:[9,4,1,""],save_classmethod:[9,4,1,""],save_codeobject:[9,4,1,""],save_ellipsis:[9,4,1,""],save_file:[9,4,1,""],save_function:[9,4,1,""],save_function_tuple:[9,4,1,""],save_global:[9,4,1,""],save_inst:[9,4,1,""],save_instancemethod:[9,4,1,""],save_itemgetter:[9,4,1,""],save_memoryview:[9,4,1,""],save_module:[9,4,1,""],save_not_implemented:[9,4,1,""],save_partial:[9,4,1,""],save_property:[9,4,1,""],save_reduce:[9,4,1,""],save_unsupported:[9,4,1,""],v:[9,5,1,""]},"pywren.serialize.module_dependency":{ModuleDependencyAnalyzer:[8,2,1,""]},"pywren.serialize.module_dependency.ModuleDependencyAnalyzer":{add:[8,4,1,""],get_and_clear_paths:[8,4,1,""],ignore:[8,4,1,""]},"pywren.serialize.serialize":{SerializeIndependent:[8,2,1,""]},"pywren.serialize.util":{bytes_to_b64str:[8,1,1,""],create_mod_data:[8,1,1,""]},"pywren.storage":{exceptions:[10,0,0,"-"],s3_backend:[10,0,0,"-"],storage:[10,0,0,"-"],storage_utils:[10,0,0,"-"]},"pywren.storage.exceptions":{StorageConfigMismatchError:[10,7,1,""],StorageNoSuchKeyError:[10,7,1,""],StorageOutputNotFoundError:[10,7,1,""]},"pywren.storage.s3_backend":{S3Backend:[10,2,1,""]},"pywren.storage.s3_backend.S3Backend":{get_object:[10,4,1,""],key_exists:[10,4,1,""],list_keys_with_prefix:[10,4,1,""],put_object:[10,4,1,""]},"pywren.storage.storage":{Storage:[10,2,1,""],get_runtime_info:[10,1,1,""]},"pywren.storage.storage.Storage":{get_call_output:[10,4,1,""],get_call_status:[10,4,1,""],get_callset_status:[10,4,1,""],get_storage_config:[10,4,1,""],put_data:[10,4,1,""],put_func:[10,4,1,""]},"pywren.storage.storage_utils":{check_storage_path:[10,1,1,""],create_agg_data_key:[10,1,1,""],create_data_key:[10,1,1,""],create_func_key:[10,1,1,""],create_keys:[10,1,1,""],create_output_key:[10,1,1,""],create_status_key:[10,1,1,""],get_storage_path:[10,1,1,""]},"pywren.wait":{wait:[6,1,1,""]},"pywren.wren":{default_executor:[6,1,1,""],dummy_executor:[6,1,1,""],get_all_results:[6,1,1,""],lambda_executor:[6,1,1,""],remote_executor:[6,1,1,""],standalone_executor:[6,1,1,""]},"pywren.wrenconfig":{"default":[6,1,1,""],extract_storage_config:[6,1,1,""],get_default_config_filename:[6,1,1,""],get_default_home_filename:[6,1,1,""],load:[6,1,1,""]},"pywren.wrenhandler":{aws_lambda_handler:[6,1,1,""],b64str_to_bytes:[6,1,1,""],download_runtime_if_necessary:[6,1,1,""],generic_handler:[6,1,1,""],get_key_size:[6,1,1,""],get_server_info:[6,1,1,""]},"pywren.wrenlogging":{default_config:[6,1,1,""]},"pywren.wrenutil":{WrappedStreamingBody:[6,2,1,""],b64str_to_bytes:[6,1,1,""],bytes_to_b64str:[6,1,1,""],create_call_id:[6,1,1,""],create_callset_id:[6,1,1,""],sdb_to_dict:[6,1,1,""],split_s3_url:[6,1,1,""],uuid_str:[6,1,1,""]},"pywren.wrenutil.WrappedStreamingBody":{read:[6,4,1,""],readline:[6,4,1,""],seek:[6,4,1,""],tell:[6,4,1,""]},pywren:{ec2standalone:[6,0,0,"-"],executor:[6,0,0,"-"],future:[6,0,0,"-"],invokers:[6,0,0,"-"],local:[6,0,0,"-"],multiwren:[6,0,0,"-"],queues:[6,0,0,"-"],runtime:[6,0,0,"-"],scripts:[7,0,0,"-"],serialize:[8,0,0,"-"],storage:[10,0,0,"-"],version:[6,0,0,"-"],wait:[6,0,0,"-"],wren:[6,0,0,"-"],wrenconfig:[6,0,0,"-"],wrenhandler:[6,0,0,"-"],wrenlogging:[6,0,0,"-"],wrenutil:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","staticmethod","Python static method"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:staticmethod","4":"py:method","5":"py:attribute","6":"py:classmethod","7":"py:exception"},terms:{"2e5cbeb54e43f031eaf0":6,"boolean":10,"byte":[9,10],"class":[6,8,9,10],"default":[6,7,9],"enum":[6,8],"float":[6,9],"function":[2,6,8,9,10],"import":9,"int":[6,9],"long":9,"new":[6,8,9],"return":[4,6,9,10],"static":6,"throw":[6,10],"true":[6,8,10],"try":[],"var":9,AND:9,ARE:9,AWS:2,BUT:9,FOR:[6,9],For:[],IDs:10,NOT:9,SQS:6,SUCH:9,THE:9,THere:[],The:[2,6,9],There:1,USE:[6,9],Will:6,__future__:8,__transient__:9,_abcol:8,_bsddb:8,_codecs_cn:8,_codecs_hk:8,_codecs_iso2022:8,_codecs_jp:8,_codecs_kr:8,_codecs_tw:8,_csv:8,_ctype:8,_ctypes_test:8,_curs:8,_curses_panel:8,_elementtre:8,_heapq:8,_hotshot:8,_io:8,_json:8,_lsprof:8,_lwpcookiejar:8,_mozillacookiejar:8,_multibytecodec:8,_multiprocess:8,_pyio:8,_sqlite3:8,_strptime:8,_testcapi:8,_threading_loc:8,_weakrefset:8,abc:8,about:6,abov:9,accept:7,access:10,account:2,across:6,actual:[6,9],add:8,add_done_callback:6,addit:9,advis:9,affect:9,agg_data:6,aggreg:10,aifc:8,alia:9,all:[2,6,8,9],allow:6,alon:6,alreadi:[9,10],also:[],alwai:9,anaconda:[],analysi:8,analyz:8,ani:[6,9],answer:7,antigrav:8,anydbm:8,api:10,append:6,appli:6,appropri:9,apt:[],arg:9,argpars:8,aris:9,around:[9,10],assum:[],ast:8,asynchat:8,asyncor:8,atexit:8,attrgett:9,audiodev:8,audioop:8,autoconf:[],avail:6,aws_lambda_handl:6,aws_region:6,aws_region_str:7,b64:6,b64str_to_byt:6,backend:10,bad:6,bar:4,bas:4,base64:8,base:[6,8,9,10],basehttpserv:8,bash:[],basic:6,bastion:8,bdb:8,been:6,befor:[6,8],behind:6,berkelei:9,binari:9,binhex:8,bisect:8,blah:4,blob:8,block:6,bool:9,boto3:[6,7,8,10],boto:8,botocor:8,broken:2,bs4:8,bsd:8,bsddb:8,bucket:[2,6,7,10],bucket_nam:7,buffer:9,bug:9,build:[],built:9,builtin:8,builtin_function_or_method:9,busi:9,byte_data:[6,8],bytes_to_b64str:[6,8],bz2:8,cach:6,calendar:8,california:9,call:[6,8,10],call_async:6,call_id:[6,10],callset:[6,10],callset_id:[6,10],can:[2,6,9],cancel:6,cancellederror:6,canva:8,caus:9,cdrom:8,certain:9,certifi:8,cgi:8,cgihttpserv:8,cgitb:8,chain:9,chang:[6,9],check:[6,7,10],check_aws_region_valid:7,check_bucket_exist:7,check_onli:6,check_overwrite_funct:7,check_storage_path:10,check_valid_bucket_nam:7,chunk:8,classmethod:9,classobj:9,click:[7,8],click_validate_prompt:7,clone:[],closur:9,cloud:9,cloudpickl:[6,8],cloudpip:8,cmake:[],cmd:8,code:[6,8,9],codeblock:9,codec:8,codeop:8,collect:8,colorama:8,colorsi:8,com:[6,8],combin:9,combinations_with_replac:9,command:8,compil:[8,9],compileal:8,complet:6,compon:10,compress:9,compris:9,compute_flop:6,concurr:6,conda:[],condit:9,config:[6,10],config_filenam:6,configpars:8,configur:10,consequenti:9,contain:[6,9,10],content:[4,5],context:6,context_dict:6,contextlib:8,contract:9,contributor:9,cooki:8,cookielib:8,copi:8,copy_reg:8,copyright:9,coroutin:9,correctli:9,could:9,count:9,cprofil:8,creat:[6,9,10],create_agg_data_kei:10,create_call_id:6,create_callset_id:6,create_data_kei:10,create_func_kei:10,create_instance_profil:6,create_kei:10,create_mod_data:8,create_output_kei:10,create_status_kei:10,create_unique_bucket_nam:7,credenti:2,cross:6,crypt:8,csv:8,ctype:8,curl:[],current:10,current_path:10,curs:8,cvxopt:8,cvxpy:8,cycl:9,damag:9,data:[6,9,10],data_all_as_on:6,data_byte_rang:6,data_kei:[6,10],data_str:6,datetim:8,dbhash:8,dbm:8,deal:9,debconf:8,debedb:6,debug:6,decim:8,def:4,default_config:6,default_executor:[4,6],default_preinstal:[5,6],default_volume_s:6,defin:9,delet:6,depend:[2,8],deploi:2,deriv:9,deseri:6,design:[],detail:10,determin:9,dev:[],develop:9,dialog:8,dict:[6,9],dictionari:10,dictitem:9,differ:6,difflib:8,dill:8,dir:6,dircach:8,direct:9,dis:8,disclaim:9,dispatch:9,distribut:9,distutil:8,dlfcn:8,doc:6,doctest:8,document:[5,9],docutil:8,docxmlrpcserv:8,doe:[6,9,10],done:6,dot:4,download:6,download_runtime_if_necessari:6,dropwhil:9,dumbdbm:8,dummy_executor:6,dummy_thread:8,dummyinvok:6,dump:9,dynamic_subimport:9,each:6,ec2:6,ec2standalon:5,ellipsi:9,email:8,empti:8,encod:[6,8],endors:9,enough:6,entri:8,environ:6,error:6,essenti:[],etc:9,even:9,event:[6,9],eventu:6,everyth:2,exampl:4,except:[5,6],exclude_modul:6,execut:6,executor:[5,10],exemplari:9,exist:[7,10],exploit:6,expos:10,express:9,extra_context:6,extra_env:6,extra_meta:6,extract:9,extract_code_glob:9,extract_func_data:9,extract_storage_config:6,fail_msg:7,fallback:9,fals:[6,8,10],fewer:6,file:[3,6,9],filecmp:8,filedialog:8,fileinput:8,filenam:[6,7],fileobj:6,filesystem:[],fill:9,filter:10,find:9,finish:6,first:[6,8,9],fit:9,fix:9,fixm:6,fixtk:8,flatbuff:[],fnmatch:8,follow:[8,9],foo:4,fork:8,form:9,formatt:8,fpectl:8,fpformat:8,fraction:8,from:[2,6,8,9,10],ftplib:8,func:[6,9,10],func_kei:6,funcsig:[],function_nam:7,functool:8,futur:[5,8,10],future_builtin:8,gener:[6,8,9],generic_handl:6,genericpath:8,get:[4,6,9,10],get_all_result:6,get_and_clear_path:8,get_call_output:10,get_call_statu:10,get_callset_statu:10,get_default_config_filenam:6,get_default_home_filenam:6,get_key_s:6,get_lambda_region:7,get_log:6,get_object:10,get_result_sleep_sec:6,get_runtime_info:[6,10],get_server_info:6,get_storage_config:10,get_storage_path:10,get_usernam:7,getopt:8,getpass:8,gettext:8,gist:6,git:[],github:[1,3,6,8],github_:[],given:[6,10],glob2:8,glob:8,global:9,goal:9,good:[6,9],groupbi:9,guid:7,gzip:8,handl:[6,9],handler:10,happen:6,has:6,hashlib:8,hasn:6,have:[2,6,10],heapq:8,help:2,higher:6,hmac:8,holder:9,host_job_meta:6,hotshot:8,how:4,howev:9,html:7,htmlentitydef:8,htmllib:8,htmlparser:8,http:[6,7,8],httplib:8,idle_terminate_granular:6,ifilt:9,ifilterfals:9,ignor:8,ihook:8,imap:9,imaplib:8,imghdr:8,implement:10,impli:9,importlib:8,imputil:8,inc:9,incident:9,includ:[2,9],index:[],indirect:9,individu:6,infinit:9,info:6,inform:6,infrom:6,inject:9,inject_addon:9,inner:9,input:10,insid:6,inspect:8,inst_list:6,instal:8,instanc:[6,9],instance_list:6,instance_nam:6,instance_object:6,instance_profile_nam:6,instance_typ:6,instancemethod:9,instead:6,interact:[2,9],interrupt:9,invoc:6,invok:5,invoke_metadata:6,invoke_pool_thread:6,invoke_with_kei:6,is_pkg:8,is_tornado_coroutin:9,islambda:9,islic:9,issu:3,item:6,itemgett:9,iter:6,iter_modul:8,iterdata:6,itertool:9,its:9,itself:9,izip:9,izip_longest:9,job:6,job_max_runtim:6,job_num:6,jobrunn:5,jobstat:6,json:8,just:[6,9],keep:9,kei:[6,10],key_exist:10,keyword:8,kind:9,kwarg:6,lambclient:7,lambda:[2,9],lambda_executor:6,lambda_function_nam:6,lambdainvok:6,larg:6,latenc:6,later:9,latest:7,launch:2,launch_inst:6,layer:8,lazi:6,left:6,level:9,liabil:9,liabl:9,lib2to3:8,libboost:[],libgcc:[],libtool:[],licens:8,limit:[6,9],linecach:8,linspac:4,linuxaudiodev:8,list:[6,8,9,10],list_all_func:7,list_inst:6,list_keys_with_prefix:10,list_of_futur:6,listitem:9,load:[6,9],local:[5,8],local_handl:6,log:8,log_level:6,logic:9,loop:9,loopcount:6,loss:9,lsb_releas:8,macpath:8,macurl2path:8,mai:9,mailbox:8,mailcap:8,main:[6,7,9],make:2,map:[4,6],markupbas:8,master:[6,8],match:[6,10],materi:9,matplotlib:8,max_attempt:7,max_idle_tim:6,maxjob:6,md5:8,memoiz:9,memori:6,merchant:9,messag:7,met:9,metadata:10,method:6,mhlib:8,migrations3:7,mimetool:8,mimetyp:8,mimewrit:8,mimifi:8,mind:9,mmap:8,mock:6,mod:8,mod_path:8,modif:9,modifi:9,modul:5,module_depend:[5,6],module_nam:8,moduledependencyanalyz:8,modulefind:8,much:6,multifil:8,multiprocess:8,multithread:6,multiwren:5,multyvac:8,multyvacinit:8,must:[6,9],mutex:8,my_aws_kei:6,my_funct:4,naiv:9,name:[6,8,9,10],namedtupl:9,necessari:[6,9],need:[2,9],neglig:9,neither:[8,9],nest:9,netrc:8,network:6,nis:8,nntplib:8,non:9,none:[6,9,10],nonetyp:9,nor:[8,9],normal:4,not_don:6,notic:9,notimplementedtyp:9,ntpath:8,nturl2path:8,number:[6,8],numpi:8,obj:9,object:[6,8,9,10],occur:6,off:9,offset:6,one:6,onli:[6,9,10],opcod:8,opengl:8,oper:9,optim:6,optpars:8,org:6,os2emxpath:8,ossaudiodev:8,other:[9,10],otherwis:9,out:9,output:10,output_kei:[6,10],overrid:[9,10],overwrite_invoke_arg:6,pack:9,packag:[5,6],page:[],param:[8,10],parser:8,partial:9,particular:9,payload:6,pdb:8,permiss:9,permit:9,permut:9,pickl:[8,9],pickler:9,pickletool:8,picloud:9,piec:9,pip:2,pipe:8,pkg:[],pkg_resourc:8,pkgutil:8,plan:10,platform:8,plistlib:8,plug:9,point:9,popen2:8,poplib:8,posixfil:8,posixpath:8,possibl:[6,9],potenti:6,pprint:8,pre:8,prefix:[7,10],preinstalled_modul:8,prettyprint_inst:6,prev_path:10,print:8,print_exec:9,prior:9,procur:9,product:9,profil:8,profit:9,project:[],promot:9,prompt:[7,9],properti:9,protocol:9,provid:[6,9],pstat:8,psutil:[],pty:8,purpos:9,put:10,put_data:[6,10],put_func:10,put_object:10,pwex:4,py_compil:8,pyclbr:8,pydoc:8,pydoc_data:8,pyexpat:8,pygment:8,pypi:2,python2:9,python3:[],python:[6,9],pythonhost:6,pywren_config:6,pywren_config_fil:6,pywren_git_branch:6,pywren_git_commit:6,pywrencli:[5,6],queue:[5,8],quopri:8,rai:[],rais:6,random:[4,8],read:[6,9],readlin:[6,8],readthedoc:7,recommend:7,recreat:9,recurs:2,redi:[],redistribut:9,redownload:6,reduc:[6,9],ref:9,regent:9,region_nam:6,regist:9,remote_executor:6,repeat:[6,7,9],repo:[],repositori:[],repr:8,repres:6,reproduc:9,request:8,res:4,reserv:9,resourc:8,responsefutur:6,result:6,retain:9,retriev:10,return_when:6,rexec:8,rfc822:8,right:9,rlcomplet:8,robotpars:8,role_nam:7,rtype:10,run:[6,8,9],run_dir:6,run_job:6,runpi:8,runtest:[],runtim:[5,10],runtime_config:[6,10],runtime_meta:6,runtime_s3_bucket:6,runtime_s3_kei:6,runtime_valid:6,s3_backend:[5,6],s3_client:6,s3_url:6,s3backend:10,s3bucket:7,s3client:6,s3config:10,safe:[6,9],same:6,save:9,save_attrgett:9,save_bool:9,save_buff:9,save_builtin_funct:9,save_classmethod:9,save_codeobject:9,save_dict:9,save_ellipsi:9,save_fil:9,save_float:9,save_funct:9,save_function_tupl:9,save_glob:9,save_inst:9,save_instancemethod:9,save_int:9,save_itemgett:9,save_list:9,save_long:9,save_memoryview:9,save_modul:9,save_non:9,save_not_impl:9,save_parti:9,save_properti:9,save_reduc:9,save_str:9,save_tupl:9,save_unicod:9,save_unsupport:9,sched:8,schedul:6,scipi:8,script:[2,5,6],scrolledtext:8,sdb_to_dict:6,search:[],second:6,seek:6,sent:8,serial:[5,6,10],serializ:9,serializeindepend:8,servic:9,set:[6,8],setup:2,setupscript:[5,6],sgmllib:8,sha:8,shall:9,shelv:8,shlex:8,should:[2,8],shutil:8,simpl:6,simpledialog:8,simplehttpserv:8,simplexmlrpcserv:8,simpli:6,sinc:9,singl:6,site:8,sitecustom:8,six:8,size:6,skeleton:9,sklearn:8,smtpd:8,smtplib:8,sndhdr:8,socket:8,socketserv:8,softwar:9,some:9,soon:9,sort:8,sourc:9,special:9,specif:9,specifi:6,sphinx:8,split_s3_url:6,sqlite3:8,sqs_queue_nam:6,sqs_run_loc:6,sqsinvok:6,sre:8,sre_compil:8,sre_const:8,sre_pars:8,ssl:8,stand:6,standalon:[5,6],standalone_executor:6,standard:9,starmap:9,start:4,stat:8,state:9,staticmethod:9,statu:[6,10],status_kei:[6,10],statvf:8,storag:[5,6],storage_handl:6,storage_path:6,storage_util:[5,6],storageconfigmismatcherror:10,storagenosuchkeyerror:10,storageoutputnotfounderror:10,str:[9,10],str_data:6,stream:9,streamingbodi:6,strict:9,string:[6,8],stringio:8,stringold:8,stringprep:8,struct:8,stuff:9,subimport:9,submodul:5,subpackag:5,subprocess:8,substitut:9,succeed:[],success:6,sudo:[],suffic:9,sunau:8,sunaudio:8,support:[9,10],sure:2,symbol:8,symtabl:8,sysconfig:8,system:9,tabnanni:8,tags_to_dict:6,take:6,takewhil:9,tar:6,tarfil:8,task:6,tblib:8,tcp:6,tell:6,telnetlib:8,tempfil:8,terminate_inst:6,termio:8,test:[2,8],textwrap:8,tgt_ami:6,thei:[6,8],theoret:6,theori:9,thi:[2,6,7,8,9,10],those:[2,6],thread:8,threadpool_s:6,threw:6,throw_except:6,thu:9,time:[6,8],timeit:8,timeout:6,timeouterror:6,titl:[],tix:8,tkcolorchoos:8,tkcommondialog:8,tkconstant:8,tkdnd:8,tkfiledialog:8,tkfont:8,tkinter:8,tkmessagebox:8,tksimpledialog:8,tmp:6,toaiff:8,token:8,too:6,tornado:9,tort:9,trace:8,traceback:8,traffic:6,transact:6,transmit:8,travers:8,trigger:9,troubleshoot:4,ttk:8,tty:8,tupl:[6,9],turn:9,turtl:8,type:[8,9,10],ubuntu:[],uncomplet:6,underli:10,unicod:9,unittest:8,univers:9,unpickl:9,until:[6,7],unzip:[],updat:10,upload:6,urllib2:8,urllib:8,urlpars:8,use:[6,9],use_cached_runtim:6,used:[9,10],user:8,userdict:8,userlist:8,userstr:8,using:9,util:[5,6],uuid:8,uuid_str:6,validate_func:7,validate_lambda_function_nam:7,validate_lambda_role_nam:7,validate_s3_prefix:7,valu:6,variabl:6,verbos:6,verifi:2,version:5,version_info:6,version_str:6,wai:[7,9],wait:5,wait_dur_sec:6,want:[],warn:8,warranti:9,wave:8,weakref:8,webbrows:8,were:6,what:9,when:6,whenc:6,whether:9,which:9,whichdb:8,whose:6,without:[6,9,10],won:9,work:[2,4,6],worker:6,wrap:[6,10],wrappedstreamingbodi:6,wrapper:7,wren:5,wrenconfig:5,wrenhandl:5,wrenlog:5,wrenutil:5,written:9,wsgiref:8,xdrlib:8,xml:8,xmllib:8,xmlrpclib:8,yaml:8,yet:6,you:[2,6],your:2,zipfil:8},titles:["How it works","Examples","Getting Started","Troubleshooting","Welcome to pywren documentation!","pywren","Documentation","pywren.scripts package","pywren.serialize package","pywren.serialize.cloudpickle package","pywren.storage package"],titleterms:{aws:2,bold:[],build:[],cloudpickl:9,content:[6,7,8,9,10],default_preinstal:8,depend:[],design:[],document:[4,6],ec2standalon:6,exampl:1,except:10,executor:6,from:[],futur:6,get:2,help:[],how:0,indic:[],instal:2,invok:6,jobrunn:6,less:[],local:6,modul:[6,7,8,9,10],module_depend:8,multiwren:6,packag:[7,8,9,10],pywren:[2,4,5,6,7,8,9,10],pywrencli:7,queue:6,rai:[],runtim:6,s3_backend:10,script:7,serial:[8,9],set:2,setupscript:7,sourc:[],standalon:7,start:2,storag:10,storage_util:10,submodul:[6,7,8,9,10],subpackag:[6,8],succeed:[],tabl:[],test:[],thi:[],titl:[],troubleshoot:3,ubuntu:[],util:8,version:6,wait:6,welcom:4,work:0,wren:6,wrenconfig:6,wrenhandl:6,wrenlog:6,wrenutil:6}})