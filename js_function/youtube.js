
//////////////////////////////////////////////////////////////////////////playlist video by playlist id
  function  youtube_playlist(id)
              { 
                       var $url;
          $url="https://www.youtube.com/playlist?list="+id;
     
               var ot=js_browser($url);
               
             var   $json= sub_string(ot,'window["ytInitialData"]',26,'window["ytInitialPlayerResponse"',6);
              // echo($json)
               
               var $arry1=json_decode($json);
              var $arry=$arry1['contents']['twoColumnBrowseResultsRenderer']['tabs'][0]['tabRenderer']['content']['sectionListRenderer']['contents'][0]['itemSectionRenderer']['contents'][0]['playlistVideoListRenderer']['contents'];
           // print_r ($arry);
          // return $arry;
            var $result={};
               $result['video']=[];
              for( var $i=0; $i < count($arry) ; $i++)
                         {
 $result['video'][$i]={};
$result['video'][$i]['id']=$arry[$i]['playlistVideoRenderer']['videoId'];
$result['video'][$i]['name']=$arry[$i]['playlistVideoRenderer']['title']['simpleText'];
$result['video'][$i]['img']=$arry[$i]['playlistVideoRenderer']['thumbnail']['thumbnails'][0]['url'];
                       }
          return $result['video'];  
           //print_r ($result);
              }   

/////////////////////////////////////////////////////////////////////////////////////////////////////

/////1
function  youtube_vi1(id)
              { 
                       var $url;
          $url="https://www.youtube.com/watch?v="+id;
     
               var ot=js_browser($url);
               //echo(ot);
             var   $json= sub_string(ot,'<script >var ytplayer = ytplayer || {};ytplayer.config = ',57,';ytplayer.load = function() {',0);
              //echo($json);
               
               var $arry1=json_decode($json);
               
             //print_r($arry1);
             
          return $arry1["args"];  
           //print_r ($result);
              }
              /////
              
              function  youtube_vi2(id)
              { 
     var url , op ,json,json1,$result={},$arry, $arry0=[],$arry1=[], i,j,k;
url="http://www.youtube.com/get_video_info?video_id="+id+"";
op= js_browser(url);
$arry=parse_str(op);

             
          return $arry;  
           //print_r ($result);
              }
              
///2




//////
function youtube_video(id)
{
var url , op ,json,json1,$result={},$arry, $arry0=[],$arry1=[], i,j,k;
if(isset(youtube_vi1(id)))
$arry=youtube_vi1(id);
else
$arry=youtube_vi2(id);

$arry0=json_decode($arry["player_response"]);

$result["ada_formats"]=[];
for (i=0; i<=count($arry0["streamingData"]["adaptiveFormats"])-1; i++)
{
  $result["ada_formats"][i]={};
  if(isset($arry0["streamingData"]["adaptiveFormats"][i]["qualityLabel"]))
  $result["ada_formats"][i]["quality"]=$arry0["streamingData"]["adaptiveFormats"][i]["qualityLabel"];
  else
  $result["ada_formats"][i]["quality"]=$arry0["streamingData"]["adaptiveFormats"][i]["audioQuality"];
  $result["ada_formats"][i]["url"]=$arry0["streamingData"]["adaptiveFormats"][i]["url"];
}
print_r($result);
return $result;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function  youtube_search($id)
              { 
                       var $url;
          $url="https://www.youtube.com/results?search_query="+$id;
     
               var ot=js_browser($url);
               //echo(ot);
             var   $json= sub_string(ot,'window["ytInitialData"]',26,'window["ytInitialPlayerResponse"',6);
              //echo($json)
               
               var $arry1=json_decode($json);
              // print_r($arry1);
              var $arry=$arry1['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']['contents'][0]['itemSectionRenderer']['contents'];
           //print_r ($arry);
          //return $arry;
            var $result={};
               $result['video']=[];
              for( var $i=0; $i < count($arry) ; $i++)
                         {
                            // echo ("up");
                            if(!isset($arry[$i]['videoRenderer']))
                             {continue;}
                              //echo ("med");
 $result['video'][$i]={};
$result['video'][$i]['id']=$arry[$i]['videoRenderer']['videoId'];
$result['video'][$i]['name']=$arry[$i]['videoRenderer']['title']['simpleText'];
$result['video'][$i]['img']=$arry[$i]['videoRenderer']['thumbnail']['thumbnails'][0]['url'];
             //echo ("down");
                       }
                       
          return $result['video'];  
           //print_r ($result);
              }













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
