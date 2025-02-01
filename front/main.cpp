Mat facial_change::cheeks(Mat out, Mat curr_shape, float incheeks ,double &x ,double &y ,double &w ,double &h)
{

    float ed1[8][2]={{0,(float)h-1},{(float)w/2,(float)h-1},{(float)w-1,(float)h-1},{(float)w-1,(float)h/2},{(float)w-1,0},{(float)w/2,0}, {0,0},{0,(float)h/2}};; // pre
    // Extract face

	
    Mat face = out.clone();  // pre
    face.convertTo(face, CV_8UC3);   // pre
 
  
 
    Mat end(8, 2, CV_32FC1, ed1); // pre
    Mat shape;  // pre

   vconcat(curr_shape, end, shape); 
	
	
   float langle=atan((shape.at<float>(52,1)-shape.at<float>(61,1))/(shape.at<float>(52,0)-shape.at<float>(61,0)));  
   float degree= langle*180/PI;

   cv::Point2f center(cv::mean(shape.col(0))[0],cv::mean(shape.col(1))[0]);
   Mat newsh;

   Mat face2 = face.clone();
   shape_rotate(shape,newsh,center,degree);

	////adding the points 
   
    addExtraPoints(newsh);

    shape = newsh.clone();


    
  
    Mat face1 = face.clone();
  
    float d_8_24,d_1_31,d_2_30,d_3_29,d_4_28,d_16_43,d_116_52,d_62_117;
	d_8_24=sqrt(pow(shape.at<float>(8,0)-shape.at<float>(24,0),2)+pow(shape.at<float>(8,1)-shape.at<float>(24,1),2));
    d_1_31=sqrt(pow(shape.at<float>(1,0)-shape.at<float>(31,0),2)+pow(shape.at<float>(1,1)-shape.at<float>(31,1),2));
	d_2_30=sqrt(pow(shape.at<float>(2,0)-shape.at<float>(30,0),2)+pow(shape.at<float>(2,1)-shape.at<float>(30,1),2));
	d_3_29=sqrt(pow(shape.at<float>(3,0)-shape.at<float>(29,0),2)+pow(shape.at<float>(3,1)-shape.at<float>(29,1),2));
	d_4_28=sqrt(pow(shape.at<float>(4,0)-shape.at<float>(28,0),2)+pow(shape.at<float>(4,1)-shape.at<float>(28,1),2));
	
	d_16_43=sqrt(pow(shape.at<float>(16,0)-shape.at<float>(43,0),2)+pow(shape.at<float>(16,1)-shape.at<float>(43,1),2));

	d_116_52=sqrt(pow(shape.at<float>(116,0)-shape.at<float>(118,0),2)+pow(shape.at<float>(57,1)-shape.at<float>(73,1),2));
	d_62_117=sqrt(pow(shape.at<float>(117,0)-shape.at<float>(119,0),2)+pow(shape.at<float>(62,1)-shape.at<float>(76,1),2));
	//d_2_14=sqrt(pow(shape.at<float>(2,0)-shape.at<float>(14,0),2)+pow(shape.at<float>(2,1)-shape.at<float>(14,1),2));
	////cout<<d_7_9<<" "<<d_6_10<<" "<<d_5_11<<" "<<d_4_12<<" "<<d_3_13;
	Mat shape_t=shape.clone();

	// float langle=atan((shape.at<float>(8,1)-shape.at<float>(5,1))/(shape.at<float>(8,0)-shape.at<float>(5,0)))*180/PI;  
	// float rangle=atan((shape.at<float>(8,1)-shape.at<float>(11,1))/(shape.at<float>(8,0)-shape.at<float>(11,0)))*180/PI;  

	// // float sh_h=(d_8_27/d_6_10);
	// float sh_h=180-(langle-rangle);  
	////cout<<"\nslim = "<<180-(langle-rangle)<<" "<<langle<<" "<<rangle;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/// Equation of line

	float m1,m2,b1,b2,f=0.5;
	incheeks= std::min(std::max(incheeks, 0.0f), 10.0f);


	if(incheeks>5)
        incheeks=5;
    else if(incheeks<0)
        incheeks=0;
	incheeks/=10.0f;
	f*=incheeks;

	m1=(shape.at<float>(8,1)-shape.at<float>(16,1))/((shape.at<float>(8,0)-shape.at<float>(16,0)));
	m2=(shape.at<float>(24,1)-shape.at<float>(16,1))/((shape.at<float>(24,0)-shape.at<float>(16,0)));

    b1=shape.at<float>(8,1)-m1*shape.at<float>(8,0);
    b2=shape.at<float>(24,1)-m2*shape.at<float>(24,0);

    shape_t.at<float>(31,0)+=(-(m1*shape_t.at<float>(31,0)+b1)+shape_t.at<float>(31,1))*f;
    shape_t.at<float>(1,0)-=(-(m2*shape_t.at<float>(1,0)+b2)+shape_t.at<float>(1,1))*f;
    shape_t.at<float>(30,0)+=(-(m1*shape_t.at<float>(30,0)+b1)+shape_t.at<float>(30,1))*f;
    shape_t.at<float>(2,0)-=(-(m2*shape_t.at<float>(2,0)+b2)+shape_t.at<float>(2,1))*f;
    shape_t.at<float>(29,0)+=(-(m1*shape_t.at<float>(29,0)+b1)+shape_t.at<float>(29,1))*f;
    shape_t.at<float>(3,0)-=(-(m2*shape_t.at<float>(3,0)+b2)+shape_t.at<float>(3,1))*f;
    shape_t.at<float>(28,0)+=(-(m1*shape_t.at<float>(28,0)+b1)+shape_t.at<float>(28,1))*f;
    shape_t.at<float>(4,0)-=(-(m2*shape_t.at<float>(4,0)+b2)+shape_t.at<float>(4,1))*f;

   Mat face3 = face.clone();
   Mat current;

   shape_rotate(shape,current,center,-degree);
   Mat transfor;
   
   shape_rotate(shape_t,transfor,center,-degree);
	

    Point2f srcTri[3];
    Point2f destTri[3];
    face.convertTo(face, CV_32F);
    Mat img_b = Mat::zeros(face.size(), face.type());
    Mat img_w = Mat::zeros(face.size(), face.type());
	

    for (int  i = 0; i <triangles.rows; i++) {
	
		

        for (int j = 0; j < 3; j++) {
            int x = triangles.at<uchar>(i, j);
            srcTri[j] = Point2f(current.at<float>(x, 0), current.at<float>(x, 1));
			destTri[j] = Point2f(transfor.at<float>(x, 0), transfor.at<float>(x, 1));
            
        }


		
    warpTriangle1(face, img_w,srcTri, destTri);
	// show_triangles(face,triangles,transfor);
	// imshow("traingles",face/255.0);
	// waitKey(0);

    }
	
     return img_w;
}










Mat facial_change::cheeks(Mat out, Mat curr_shape, float incheeks ,double &x ,double &y ,double &w ,double &h)
{
    float sl=0.012;
	
     float ed1[8][2]={{0,(float)h-1},{(float)w/2,(float)h-1},{(float)w-1,(float)h-1},{(float)w-1,(float)h/2},{(float)w-1,0},{(float)w/2,0}, {0,0},{0,(float)h/2}};
    // Extract face

    Mat face = out.clone();  // pre
    face.convertTo(face, CV_8UC3);   // pre
 
  
 
    Mat end(8, 2, CV_32FC1, ed1); // pre
    Mat shape;  // pre

    vconcat(curr_shape, end, shape); 
	
	
   float langle=atan((shape.at<float>(52,1)-shape.at<float>(61,1))/(shape.at<float>(52,0)-shape.at<float>(61,0)));  
   float degree= langle*180/PI;

  


   cv::Point2f center(cv::mean(shape.col(0))[0],cv::mean(shape.col(1))[0]);
   Mat newsh;

   


   Mat face2 = face.clone();
   shape_rotate(shape,newsh,center,degree);

	////adding the points 
  
    addExtraPoints(newsh);

    shape = newsh.clone();

  
    Mat face1 = face.clone();
  
    float d_1_31,d_2_30,d_3_29,d_4_28,d_16_43,d_116_52,d_62_117;
	d_1_31=sqrt(pow(shape.at<float>(1,0)-shape.at<float>(31,0),2)+pow(shape.at<float>(1,1)-shape.at<float>(31,1),2));
	d_2_30=sqrt(pow(shape.at<float>(2,0)-shape.at<float>(30,0),2)+pow(shape.at<float>(2,1)-shape.at<float>(30,1),2));
	d_3_29=sqrt(pow(shape.at<float>(3,0)-shape.at<float>(29,0),2)+pow(shape.at<float>(3,1)-shape.at<float>(29,1),2));
	d_4_28=sqrt(pow(shape.at<float>(4,0)-shape.at<float>(28,0),2)+pow(shape.at<float>(4,1)-shape.at<float>(28,1),2));
	
	d_16_43=sqrt(pow(shape.at<float>(16,0)-shape.at<float>(43,0),2)+pow(shape.at<float>(16,1)-shape.at<float>(43,1),2));

	d_116_52=sqrt(pow(shape.at<float>(116,0)-shape.at<float>(118,0),2)+pow(shape.at<float>(57,1)-shape.at<float>(73,1),2));
	d_62_117=sqrt(pow(shape.at<float>(117,0)-shape.at<float>(119,0),2)+pow(shape.at<float>(62,1)-shape.at<float>(76,1),2));
	Mat shape_t=shape.clone();

	



	incheeks = std::min(std::max(incheeks, 0.0f), 10.0f);


	if(incheeks>0.5)
	     incheeks= 0.20;
	else if(incheeks<0)cheeks
	     incheeks=0;

	float  f=incheeks/20.0f;

	// cout<<"this is fcheeks"<<f<<endl;
	// waitKey(0);

		

	// if(sl>10)
    //     sl=10;
    // else if(sl<0)
    //     sl=0;
	// sl/=10;
    
	float fact=d_1_31/20;
	float fact2=d_62_117/5;

	// fact*=2.0;
	
	// fact2*=2.0;
	
		shape_t.at<float>(1,0)-=d_1_31*fact;
		shape_t.at<float>(31,0)+=d_1_31*fact;
		shape_t.at<float>(2,0)-=d_2_30*fact;
		shape_t.at<float>(30,0)+=d_2_30*fact;
		shape_t.at<float>(3,0)-=d_3_29*fact;
		shape_t.at<float>(29,0)+=d_3_29*fact;
		shape_t.at<float>(4,0)-=d_4_28*fact;
		shape_t.at<float>(28,0)+=d_4_28*fact;


    Mat face3 = face.clone();
    Mat current;

    shape_rotate(shape,current,center,-degree);
    Mat transfor;
   
    shape_rotate(shape_t,transfor,center,-degree);
	

    Point2f srcTri[3];
    Point2f destTri[3];
    face.convertTo(face, CV_32F);
    Mat img_b = Mat::zeros(face.size(), face.type());
    Mat img_w = Mat::zeros(face.size(), face.type());
	

    for (int  i = 0; i <triangles.rows; i++) {
	
		

        for (int j = 0; j < 3; j++) {
            int x = triangles.at<uchar>(i, j);
            srcTri[j] = Point2f(current.at<float>(x, 0), current.at<float>(x, 1));
			destTri[j] = Point2f(transfor.at<float>(x, 0), transfor.at<float>(x, 1));
           
        }


    

    

	
		
    warpTriangle1(face, img_w,srcTri, destTri);
	

    }

	
	
     return img_w;
}