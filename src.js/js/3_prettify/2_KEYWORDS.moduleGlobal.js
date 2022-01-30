// Keyword lists for various languages.
// We use things that coerce to strings to make them compact when minified
// and to defeat aggressive optimizers that fold large string constants.
var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," +
    "double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed," +
    "sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];
var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
    "new,operator,private,protected,public,this,throw,true,try,typeof"];
var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignas,alignof,align_union,asm,axiom,bool," +
    "concept,concept_map,const_cast,constexpr,decltype,delegate," +
    "dynamic_cast,explicit,export,friend,generic,late_check," +
    "mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert," +
    "static_cast,template,typeid,typename,using,virtual,where"];
var JAVA_KEYWORDS = [COMMON_KEYWORDS,
    "abstract,assert,boolean,byte,extends,finally,final,implements,import," +
    "instanceof,interface,null,native,package,strictfp,super,synchronized," +
    "throws,transient"];
var CSHARP_KEYWORDS = [COMMON_KEYWORDS,
    "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending," +
    "dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface," +
    "internal,into,is,join,let,lock,null,object,out,override,orderby,params," +
    "partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong," +
    "unchecked,unsafe,ushort,value,var,virtual,where,yield"];
var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
    "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
    "throw,true,try,unless,until,when,while,yes";
var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
    "abstract,async,await,constructor,debugger,enum,eval,export,from,function," +
    "get,import,implements,instanceof,interface,let,null,of,set,undefined," +
    "var,with,yield,Infinity,NaN"];
var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
    "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
    "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
    "elif,except,exec,finally,from,global,import,in,is,lambda," +
    "nonlocal,not,or,pass,print,raise,try,with,yield," +
    "False,True,None"];
var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
    "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
    "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
    "BEGIN,END"];
var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
    "function,in,local,set,then,until"];
var ALL_KEYWORDS = [
    CPP_KEYWORDS, CSHARP_KEYWORDS, JAVA_KEYWORDS, JSCRIPT_KEYWORDS,
    PERL_KEYWORDS, PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
